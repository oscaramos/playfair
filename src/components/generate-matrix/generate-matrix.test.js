import generateMatrix, { pushInRow } from './generate-matrix';

it('Video test', () => {
  const matrix = generateMatrix('bachata');
  expect(matrix).toEqual([['B','A','C','H','T'],['D','E','F','G','I/J'],['K','L','M','N','O'],['P','Q','R','S','U'],['V','W','X','Y','Z']]);
})

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