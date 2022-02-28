class Printer {
    constructor(){
        this.text = "Hello World with classes"
    }

    printerTest()  {
        return this.text
    }
}

let myPrinter = new Printer();



let testResult = myPrinter.printerTest()

console.log(testResult)
