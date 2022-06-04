class Worker {

    constructor (name, surname, rate,workdays) {
        this.name = name;
        this.surname = surname; 
        this.rate = rate;
        this.workdays = workdays;
    }
    getSalary  () {
        let a = this.rate * this.workdays;
        return a
    }
    setSurname (surname) {
        this.surname  = surname
        return true
    }
sayLoL () {
    return this.surname +' '+ this.getSalary();
    }
}
let user1 = new Worker ('Andrew', 'Petrov', 31, 10);
console.log (user1.sayLoL());
if 
(user1.setSurname ('Петров'))
console.log (user1.sayLoL());
let user2 = new Worker ('Andrew', 'Ivanov', 31, 10);

if (user1.getSalary() > user2.getSalary()) {
    console.log (user1.surname);
}
else if (user2.getSalary() > user1.getSalary()){
    console.log (user2.surname);
} else {
    console.log ('Идите у чёрту');
}
    


