import { romanConvertRecursive, romanConverterIterative} from "./roman";

describe('roman number test', () => {

    test.each([
        [1, "I"],
        [2, "II"],
        [3, "III"],
        [4, "IV"],
        [5, "V"],
        [6, "VI"],
        [7, "VII"],
        [8, "VIII"],
        [9, "IX"],
        [10, "X"],
        [44, "XLIV"],
        [99, "XCIX"],
        [3498, "MMMCDXCVIII"],

      ])('%i should be converted to %s', (arabic, roman) => {
        expect(romanConvertRecursive(arabic)).toBe(roman);
        expect(romanConverterIterative(arabic)).toBe(roman);
      });

});