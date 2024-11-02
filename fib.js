let n = prompt("Введіть число n:");
let oldoldf = 1;
let oldf = 1;
let sequence = "0 1 1";

for (let i = 1; i < n - 2; i++) {
    let newf = oldoldf + oldf;
    sequence += ` ${newf}`;
    oldoldf = oldf;
    oldf = newf;
}

alert(`Послідовність Фібоначчі до числа n: ${sequence}`);
