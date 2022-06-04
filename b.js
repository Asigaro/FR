
let l = 'ч';
let m = 'Я хочу спать';
function o (a,l) 
{
    let m = []
for (x = 0; x < a.length; x++) {
    if ( a[x] == l) {
        m.push (x); 
       
    }
}
return m;
}
console.log (o (m,l));
