function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Nebur", lastName: "Namzug" };
console.log(greeter(user));
