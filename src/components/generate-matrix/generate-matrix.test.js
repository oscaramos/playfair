import generateMatrix, { pushInRow } from './generate-matrix';


it('Video test', () => {
  const key = 'bachata';
  const matrix = generateMatrix(key);
  expect(matrix).toEqual([['B','A','C','H','T'],['D','E','F','G','I/J'],['K','L','M','N','O'],['P','Q','R','S','U'],['V','W','X','Y','Z']]);
})

it('When key is I', () => {
  const key = 'I';
  const matrix = generateMatrix(key);
  expect(matrix).toEqual([['I/J','A','B','C','D'],['E','F','G','H','K'],['L','M','N','O','P'],['Q','R','S','T','U'],['V','W','X','Y','Z']]);
});

it('When key is J', () => {
  const key = 'J';
  const matrix = generateMatrix(key);
  expect(matrix).toEqual([['I/J','A','B','C','D'],['E','F','G','H','K'],['L','M','N','O','P'],['Q','R','S','T','U'],['V','W','X','Y','Z']]);
});

it('Push in row', () => {
  expect(pushInRow([], 'a')).toEqual([['a']]);
  expect(pushInRow([['a']], 'b')).toEqual([['a', 'b']]);
  expect(pushInRow([['a', 'b']], 'c')).toEqual([['a', 'b', 'c']]);
  expect(pushInRow([['a', 'b', 'c', 'd', 'e']], 'f')).toEqual([['a', 'b', 'c', 'd', 'e'], ['f']]);
  expect(pushInRow([['a', 'b', 'c', 'd', 'e'], ['f']], 'g')).toEqual([['a', 'b', 'c', 'd', 'e'], ['f', 'g']]);
  expect(pushInRow([['a', 'b', 'c', 'd', 'e'], ['f', 'g', 'h', 'i', 'j']], 'k'))
          .toEqual([['a', 'b', 'c', 'd', 'e'], ['f', 'g', 'h', 'i', 'j'], ['k']]);
});

// PROBAR CON CLAVES GRANDES