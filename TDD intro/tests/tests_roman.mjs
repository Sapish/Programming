import test from './test.mjs'
import romanNumeralConverter from '../romanNumeral.mjs'

const tester = test("Roman Numeral Tests");

tester.dosNotThrowError(() => { romanNumeralConverter(1) }, "Roman numeral converter is defined");

tester.isEqual(romanNumeralConverter(1), "I", "Converting 1 to Roman");
tester.isEqual(romanNumeralConverter(2), "II", "Converting 2 to Roman");
tester.isEqual(romanNumeralConverter(3), "III", "Converting 3 to Roman");
tester.isEqual(romanNumeralConverter(4), "IV", "Converting 4 to Roman");
tester.isEqual(romanNumeralConverter(5), "V", "Converting 5 to Roman");
tester.isEqual(romanNumeralConverter(7), "VII", "Converting 7 to Roman");
tester.isEqual(romanNumeralConverter(9), "IX", "Converting 9 to Roman");
tester.isEqual(romanNumeralConverter(10), "X", "Converting 10 to Roman");
tester.isEqual(romanNumeralConverter(40), "XL", "Converting 40 to Roman");




