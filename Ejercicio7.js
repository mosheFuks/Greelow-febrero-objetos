class Counter{
    constructor(){
        this.number= 2;
    }

    incraseOne(){
        this.number = this.number + 1
    }

    decraseOne(){
        this.number = this.number - 1
    }

    getValue(){
        return this.number
    }
}

let num = new Counter()
num.decraseOne()
console.log(num.getValue())
num.incraseOne()
num.incraseOne()
console.log(num.getValue())
num.decraseOne()
num.decraseOne()
console.log(num.getValue())


