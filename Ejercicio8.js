let d = new Date()
let anioAct = d.getFullYear();

class Person {
    constructor(){
        this.age = 0
    }

    calculateAge(fechaNacimineto){
        let diferencia = Date.now() - fechaNacimineto.getTime()
        fechaNacimineto = new Date(diferencia)
        this.age = Math.abs(fechaNacimineto.getUTCFullYear() - 1970)
    }

    getAge(){
        return this.age;
    }
}

let p = new Person()

function canDrinkAlcohol(){
    let puede = false;
    if(p.getAge() >= 21){
        puede = true
    }
    return puede;
}
console.log(canDrinkAlcohol());
