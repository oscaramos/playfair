const push = (arr, x) => {
  return arr.concat([x]);
}

export const pushInRow = (arr, c, i = 0) => { // magic!!
  if (arr.length < i + 1)
    arr = push(arr, []);
  if (arr[i].length === 5)
    return [arr[i], ...pushInRow(arr, c, i + 1)];
  return [push(arr[i], c)];
}

const pushInRowWithSpecialCase = (arr, c, i = 0) => {
  if (!(c === 'I' || c === 'J'))
    return pushInRow(arr, c);

  if (!hasInArray(arr, c))
    return pushInRow(arr, 'I/J');
  return arr;
}

function removeAndPush(key) {
  const removedDuplicates = [...new Set(key.split(''))];
  return removedDuplicates.reduce((prev, curr) => {
    return pushInRowWithSpecialCase(prev, curr)
  }, []);
}

function fromAToZ(fn) {
  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++)
    fn(String.fromCharCode(i));
}

function hasInArray(arr, c) {
  for (let i = 0; i < arr.length; i++)
    for(let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].includes(c))
        return true;
    }
  return false;
}

const generateMatrix = (key) => {
  key = key.toUpperCase();
  let arr = removeAndPush(key);
  fromAToZ(c => {
    if (!hasInArray(arr, c)) {
      arr = pushInRowWithSpecialCase(arr, c);
    }
  });
  return arr;
}

export default generateMatrix;