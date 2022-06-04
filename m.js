let a = [
    [4,9,15],
    [10,21,43],
]
let m = [0,0];
for (let c = 1; c < 3; c++) {
    for (let b = 1; b < 2; b++) {
    m[c] = m[c] + a[c][b];      
    }
}
console.log (m);
