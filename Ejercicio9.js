class Calculadora{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    sumar(){
        let sum = this.num1 + this.num2
        return sum
    }

    restar(){
        let rest = this.num1 - this.num2
        return rest;
    }

    multiplicar(){
        let multi = this.num1 * this.num2
        return multi;
    }

    dividir(){
        let div;
        if(this.num1 > this.num2){
            div = this.num1 / this.num2
        } else {
            div = 0
        }
        return div;
    }
}

let calcu = new Calculadora(1, 2);
console.log(`Suma: ${calcu.sumar()}, Resta: ${calcu.restar()}, Multiplicacion: ${calcu.multiplicar()}, Divivsion ${calcu.dividir()}` )