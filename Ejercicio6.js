class Printer {
    constructor(){
        this.text = "Hello World with classes"
        this.model = "TX-200"
    }

    getModel(){
        return this.model
    }


}

let myPrinter = new Printer();

console.log("The model of the Priner is: " , myPrinter.getModel())
