interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Nebur", lastName: "Namzug" };

console.log(greeter(user));