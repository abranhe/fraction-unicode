import fractionUnicode from './index';

test('fractionUnicode', () => {
  expect(fractionUnicode(1, 2)).toBe('½');
  expect(fractionUnicode(1, 3)).toBe('⅓');
  expect(fractionUnicode(2, 3)).toBe('⅔');
  expect(fractionUnicode(1, 4)).toBe('¼');
  expect(fractionUnicode(3, 4)).toBe('¾');
  expect(fractionUnicode(1, 5)).toBe('⅕');
  expect(fractionUnicode(2, 5)).toBe('⅖');
  expect(fractionUnicode(3, 5)).toBe('⅗');
  expect(fractionUnicode(4, 5)).toBe('⅘');
  expect(fractionUnicode(1, 6)).toBe('⅙');
  expect(fractionUnicode(5, 6)).toBe('⅚');
  expect(fractionUnicode(1, 7)).toBe('⅐');
  expect(fractionUnicode(1, 8)).toBe('⅛');
  expect(fractionUnicode(3, 8)).toBe('⅜');
  expect(fractionUnicode(5, 8)).toBe('⅝');
  expect(fractionUnicode(7, 8)).toBe('⅞');
  expect(fractionUnicode(1, 9)).toBe('⅑');
  expect(fractionUnicode(1, 10)).toBe('⅒');
  expect(fractionUnicode(7, 13)).toBe('⁷⁄₁₃');
});
