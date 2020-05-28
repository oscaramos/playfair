export function isCase1(cc, matrix) {
  const [c1, c2] = cc;
  const [i1] = getIndexes(c1, matrix);
  const [i2] = getIndexes(c2, matrix);
  return i1===i2;
}

export function isCase2(cc, matrix) {
  const [c1, c2] = cc;
  const [, j1] = getIndexes(c1, matrix);
  const [, j2] = getIndexes(c2, matrix);
  return j1===j2;
}

function getIndexes(c, matrix) {
  for(let i = 0; i < matrix.length; i++)
    for(let j = 0; j < matrix[i].length; j++)
      if(matrix[i][j].includes(c))
        return [i, j];
  return null;
}

function move(x) {
  return (x + 1) % 5;
}

// Move inside rows, change columns
export function resolveCase1(cc, matrix) {
  const [c1, c2] = cc;
  const [i1, j1] = getIndexes(c1, matrix);
  const [i2, j2] = getIndexes(c2, matrix);
  return matrix[i1][move(j1)]+matrix[i2][move(j2)];
}

// Move inside columns, change rows
export function resolveCase2(cc, matrix) {
  const [c1, c2] = cc;
  const [i1, j1] = getIndexes(c1, matrix);
  const [i2, j2] = getIndexes(c2, matrix);
  return matrix[move(i1)][j1]+matrix[move(i2)][j2];
}

// Move inside rows, interchange columns
export function resolveCase3(cc, matrix) {
  const [c1, c2] = cc;
  const [i1, j1] = getIndexes(c1, matrix);
  const [i2, j2] = getIndexes(c2, matrix);
  return matrix[i1][j2]+matrix[i2][j1];
}

const preprocessText = text => {
  text = text.toUpperCase().replace(/ /g, '');
  if (text.length % 2 === 1)
    text += 'X';
  return text;
};

const cipher = (text, matrix) => {
  text = preprocessText(text);
  return text.split('').reduce((prev, curr, idx) => {
    if(idx%2===0) {
      const cc = text[idx]+text[idx + 1];
      if(isCase1(cc, matrix))
        return prev+resolveCase1(cc, matrix);
      else if(isCase2(cc, matrix))
        return prev+resolveCase2(cc, matrix);
      return prev+resolveCase3(cc, matrix);
    } else
      return prev;
  }, '')
}

export default cipher;