let y = Math.random () * (10 - 1) + 1;
let err = 0;
let x = Math.random () * (10 - 1) + 1;

for (let z = 0; z < 5; z++) { 
    y = Math.random () * (10 - 1) + 1;
    x = Math.random () * (10 - 1) + 1;
    if ( Number (prompt ('Сколько будет' + Math.round (x)+  '*' + Math.round (y)+ '?')) != Math.round (x) * Math.round (y) ) {
    err ++;
    }
}
alert (err);
switch (err) {
case 0: alert ('Молодец, возьми с полки пирожок.')
break
case 1: alert ('Ну пойдёт.')
break 
case 2: alert ('Ладно, хватит с тебя')
break
default: alert ('Ну ты и дебил конечно!')
break 
}
