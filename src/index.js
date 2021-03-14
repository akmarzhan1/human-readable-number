module.exports = function toReadable(number) {
    let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let first = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    const split_number = String(number).split('');

    if (String(number).length == 1) {
        return digits[number];
    }
    else if (String(number).length == 2) {
        if (split_number[1] === "0") {
            return tens[Number(split_number[0]) - 1];
        }
        else if (split_number[0] === "1") {
            return first[Number(split_number[1]) - 1];
        }
        else {
            return tens[Number(split_number[0]) - 1] + " " + digits[Number(split_number[1])];
        }
    }
    else {
        if (split_number[1] === "0" && split_number[2] === "0") {
            return digits[Number(split_number[0])] + " " + "hundred";
        }
        else if (split_number[2] === "0") {
            return digits[Number(split_number[0])] + " " + "hundred" + " " + tens[Number(split_number[1]) - 1];
        }
        else if (split_number[1] === "1") {
            return digits[Number(split_number[0])] + " " + "hundred" + " " + first[Number(split_number[2]) - 1];
        }
        else if (split_number[1] === "0") {
            return digits[Number(split_number[0])] + " " + "hundred" + " " + digits[Number(split_number[2])];
        }
        else {
            return digits[Number(split_number[0])] + " " + "hundred" + " " + tens[Number(split_number[1]) - 1] + " " + digits[Number(split_number[2])];
        }
    }
}
