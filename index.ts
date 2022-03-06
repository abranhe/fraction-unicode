type UnicodeMapProvider = Record<number | string, string>;

const numeratorMap: UnicodeMapProvider = {
  0: '⁰',
  1: '¹',
  2: '²',
  3: '³',
  4: '⁴',
  5: '⁵',
  6: '⁶',
  7: '⁷',
  8: '⁸',
  9: '⁹',
};

const denominatorMap: UnicodeMapProvider = {
  0: '₀',
  1: '₁',
  2: '₂',
  3: '₃',
  4: '₄',
  5: '₅',
  6: '₆',
  7: '₇',
  8: '₈',
  9: '₉',
};

const fractionsUnicodeMap: UnicodeMapProvider = {
  '1/2': '½',
  '1/3': '⅓',
  '2/3': '⅔',
  '1/4': '¼',
  '3/4': '¾',
  '1/5': '⅕',
  '2/5': '⅖',
  '3/5': '⅗',
  '4/5': '⅘',
  '1/6': '⅙',
  '5/6': '⅚',
  '1/7': '⅐',
  '1/8': '⅛',
  '3/8': '⅜',
  '5/8': '⅝',
  '7/8': '⅞',
  '1/9': '⅑',
  '1/10': '⅒',
};

/** @internal */
function getUnicodeString(mapProvider: UnicodeMapProvider, number: number | string): string {
  return [...String(number)]
    .map(Number)
    .map(n => mapProvider[n])
    .join('');
}

const slash = '⁄';

/**
 * Returns a string representation of a number in fractional form.
 *
 * @param numerator The numerator of the fraction.
 * @param denominator The denominator of the fraction.
 * @returns A string representation of the fraction.
 * @throws If the denominator is 0. Or if the numerator is not an integer.
 */
export default function fractionUnicode(numerator: number, denominator: number): string {
  if (denominator === 0) {
    throw new Error('Denominator cannot be 0.');
  }

  if (Number(numerator) % 1 !== 0 || Number(denominator) % 1 !== 0) {
    throw new TypeError('numerator and denominator must be integers');
  }

  const fraction = `${numerator}/${denominator}`;

  if (fractionsUnicodeMap[fraction]) {
    return fractionsUnicodeMap[fraction];
  }

  const numeratorUnicode = getUnicodeString(numeratorMap, numerator);
  const denominatorUnicode = getUnicodeString(denominatorMap, denominator);

  return `${numeratorUnicode}${slash}${denominatorUnicode}`;
}
