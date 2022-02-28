class Persona {
    constructor(name, lastName, birthDate){
        this.Name = name
        this.LastName = lastName
        this.BirthDate= birthDate
    }
}

let p = new Persona("Moshe", "Fuks", "Oct 18, 2001")
console.log(p)