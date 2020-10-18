export function romanConvertRecursive(arabicNumber) {
    var symbols = [
        { arabic: 1000, roman: "M" },
        { arabic: 900, roman: "CM" },
        { arabic: 500, roman: "D" },
        { arabic: 400, roman: "CD" },
        { arabic: 100, roman: "C" },
        { arabic: 90, roman: "XC" },
        { arabic: 50, roman: "L" },
        { arabic: 40, roman: "XL" },
        { arabic: 10, roman: "X" },
        { arabic: 9, roman: "IX" },
        { arabic: 5, roman: "V" },
        { arabic: 4, roman: "IV" },
        { arabic: 1, roman: "I" }];

    if (arabicNumber == 0) return "";

    for (let i = 0; i < symbols.length; i++) {
        if (arabicNumber >= symbols[i].arabic) {
            return symbols[i].roman + romanConvertRecursive(arabicNumber - symbols[i].arabic);
        }
    }
}

export function romanConverterIterative(arabicNumber) {
    var symbols = [
        { arabic: 1000, roman: "M" },
        { arabic: 900, roman: "CM" },
        { arabic: 500, roman: "D" },
        { arabic: 400, roman: "CD" },
        { arabic: 100, roman: "C" },
        { arabic: 90, roman: "XC" },
        { arabic: 50, roman: "L" },
        { arabic: 40, roman: "XL" },
        { arabic: 10, roman: "X" },
        { arabic: 9, roman: "IX" },
        { arabic: 5, roman: "V" },
        { arabic: 4, roman: "IV" },
        { arabic: 1, roman: "I" }];

    var romanNumber = "";

    while(arabicNumber != 0) {

        for (let i = 0; i < symbols.length; i++) {
            if (arabicNumber >= symbols[i].arabic) {
                romanNumber = romanNumber + symbols[i].roman;
                arabicNumber = arabicNumber - symbols[i].arabic;
                break;
            }
        }
    }

    return romanNumber;
}