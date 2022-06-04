
let ac = [1, 2, 5, 9, 4, 13, 4, 10];
for (let j = 0; j < ac.length; j++) {
    if ( ac [j]== 4) {
        console.log ('Верно');
    };
}

console.log ('o');

let ann =  [10, 20, 30, 50, 235, 3000];
console.log(ann.filter(num => ['1','2'].includes(num.toString()[0])));


console.log ('o');

let a = 0;
let an =  [10, 20, 30, 50, 235, 3000];
for (let k = 0; k < an.length; k++) {
    a = an[k];
    while (a> 10) {
    a %= 10;
    }
    console.log(String(a));
    if ((a  == 1 ) || (a == 2) || (a == 5)) {
    console.log (String(an[k]) );
    }
}
