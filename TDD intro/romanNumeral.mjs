// Decimal to Roman Numeral converter 

function romanNumeralConverter(nInt) {

    let output = "";
    while (nInt > 0) {
        let diff = 0;

        if (nInt >= 5) {
            output += "V";
            diff = 5;
        }
        else if (nInt >= 4) {
            output += "IV";
            diff = 4;
        }
        else if (nInt < 4) {
            output += "I";
            diff = 1;
        }

        nInt -= diff;
    }

    return output;

}

export default romanNumeralConverter