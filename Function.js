function o (a,b)
{ 
 let y= 2* a + b / 3 + 36;
    if (y % 4 ==0) {
        console.log ('ok');
    }
    else {
        console.log ('You lose!')
    }
}
o (1,6);
o (5,9);
o (2,2);
o (11,0.3);

console.log (String (Math.random (0,100)));
let  mass=[1,2,3,4];
let mm2=['ff','ggg','fff']
console.log (String(mm2[1]));
let sf = ['1', 'f1','gi'];
sf.push ('2');
sf.unshift ('5');
sf.pop();
console.log (sf);

for (let i = 3; i >= 0; i--) {
    console.log (String (sf [i]));
}

for (let h = 0; h < mass.length; h++){
    console.log ( Math.sqrt(Number(mass [h])));
}
console.log ('Задание 9');
let hg = [2,5,9,15,0,4];
for (let t = 0; t< hg.length; t++) {
    if ((hg[t] >3) && (hg [t] < 10))  {
        console.log (String(hg [t]));
    }
}
