let numerator = +prompt("Enter the numerator: ");
let denominator = +prompt("Enter the denominator: ");

if (denominator === 0) {
    alert("Denominator cannot be zero.");
} else if (numerator === 0) {
    alert("0");
} else {
    let a = Math.abs(numerator);
    let b = Math.abs(denominator);
    while (a != b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    let gcd = a;

    numerator /= gcd;
    denominator /= gcd;

    if (Math.abs(numerator) > Math.abs(denominator)) {
        let num = Math.floor(numerator / denominator);
        let fractionalNumerator = numerator % denominator;
        if (fractionalNumerator != 0) {
            alert(`Improper fraction: ${num} and ${fractionalNumerator}/${denominator}`);
        } else {
            alert(`Whole number: ${num}`);
        }
    } else {
        alert(`Reduced fraction: ${numerator}/${denominator}`);
    }
}