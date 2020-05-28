function getIndexes(c, matrix) {
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++)
      if (matrix[i][j].includes(c)) // includes can detect 'I/J' case!
        return [i, j];
  return null; // this should not happen
}

function getAllIndexes(cc, matrix) {
  const [c1, c2] = cc;
  const [i1, j1] = getIndexes(c1, matrix);
  const [i2, j2] = getIndexes(c2, matrix);
  return { i1, j1, i2, j2 };
}

function move(x) {
  return (x + 1) % 5;
}

export function isCase1(cc, matrix) {
  const { i1, i2 } = getAllIndexes(cc, matrix);
  return i1 === i2;
}

export function isCase2(cc, matrix) {
  const { j1, j2 } = getAllIndexes(cc, matrix);
  return j1 === j2;
}

// Move inside rows, change columns
export function resolveCase1(cc, matrix) {
  const { i1, j1, i2, j2 } = getAllIndexes(cc, matrix);
  return matrix[i1][move(j1)] + matrix[i2][move(j2)];
}

// Move inside columns, change rows
export function resolveCase2(cc, matrix) {
  const { i1, j1, i2, j2 } = getAllIndexes(cc, matrix);
  return matrix[move(i1)][j1] + matrix[move(i2)][j2];
}

// Move inside rows, interchange columns
export function resolveCase3(cc, matrix) {
  const { i1, j1, i2, j2 } = getAllIndexes(cc, matrix);
  return matrix[i1][j2] + matrix[i2][j1];
}

const preprocessText = text => {
  text = text.toUpperCase().replace(/ /g, ''); // remove whitespaces
  return text.length % 2 === 1 ? text + 'X' : text;
};

function resolveCase(cc, matrix) {
  if (isCase1(cc, matrix))
    return resolveCase1(cc, matrix);
  else if (isCase2(cc, matrix))
    return resolveCase2(cc, matrix);
  return resolveCase3(cc, matrix);
}

const cipher = (text, matrix) => {
  return preprocessText(text).split('').reduce((prev, curr, idx) => {
    if (idx % 2 === 0)
      return prev + resolveCase(text[idx] + text[idx + 1], matrix);
    else
      return prev;
  }, '')
}

export default cipher;