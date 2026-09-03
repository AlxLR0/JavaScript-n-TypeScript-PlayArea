//esto es basicamente desarmar un obj y sacar sus elementos, para poder usarlos de manera más sencilla

const person = {
    name: 'fulanito',
    lastname: 'detal',
    age: 45,
}


// esta forma de hacerlo se puede hacer
// const name = person.name;
// const lastname = person.lastname;
// const age = person.age;

// pero se puede hacer de una manera más sencilla y elegante, usando desestructuración
const { name, lastname, age } = person;

console.log(name, lastname, age);

//desestructuración de arreglos
const characters: string[] = ['Goku', 'Vegeta', 'Trunks'];

//para sacar los elementos del arreglo, se puede hacer de la siguiente manera
//si me interesa sacar el tercer elemento, puedo poner una coma para saltar el primer y segundo elemento
const [ , , third] = characters;
//las comas indican que se va a saltar el primer y segundo elemento, y se va a asignar el tercer elemento a la variable third

console.log(third);
