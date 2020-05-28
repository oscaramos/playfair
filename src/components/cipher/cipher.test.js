import cipher, { resolveCase1, resolveCase2, resolveCase3 } from "./cipher";

const originalText = 'quien te quita lo bailado';
const matrix = [['B', 'A', 'C', 'H', 'T'], ['D', 'E', 'F', 'G', 'I/J'], ['K', 'L', 'M', 'N', 'O'], ['P', 'Q', 'R', 'S', 'U'], ['V', 'W', 'X', 'Y', 'Z']];
const criptedText = cipher(originalText, matrix);

it('Cipher Video test', () => {
  expect(criptedText).toBe('RPDFOHLWZOBCMKACEOBEMZ');
})

it('Case 1', () => {
  expect(resolveCase1('QU', matrix)).toBe('RP');
  expect(resolveCase1('IE', matrix)).toBe('DF');
  expect(resolveCase1('TA', matrix)).toBe('BC');
  expect(resolveCase1('LO', matrix)).toBe('MK');
  expect(resolveCase1('IE', matrix)).toBe('DF');
  expect(resolveCase1('BA', matrix)).toBe('AC');
});

it('Case 2', () => {
  expect(resolveCase2('EQ', matrix)).toBe('LW');
  expect(resolveCase2('UI', matrix)).toBe('ZO');
  expect(resolveCase2('HY', matrix)).toBe('GH');
});

it('Case 3', () => {
  expect(resolveCase3('OX', matrix)).toBe('MZ');
  expect(resolveCase3('IL', matrix)).toBe('EO');
  expect(resolveCase3('NT', matrix)).toBe('OH');
});