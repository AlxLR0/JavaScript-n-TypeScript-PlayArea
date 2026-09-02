// se puede crear una función de la siguiente manera
function greet(name: string): string {
    return `Hello, ${name}!`;
}

//funcion flecha, es una forma más corta de escribir funciones en JavaScript y TypeScript
const greet2 = (name: string): string => {
    return `Hello, ${name}!`;
}

// se puede simplificar la función anterior de la siguiente manera
const greetSimple = (name: string): string => `Hello, ${name}!`;


const message = greet('prro');
const message2 = greet2('broh');

console.log(message, message2);


function getUser(){
    return {
        uid: 'ABC123',
        username: 'alexl'
    };
}

const getUser2 = (): { uid: string, username: string } => {
    return {
        uid: 'ABC123',
        username: 'alexl'
    };
}

console.log(getUser(), getUser2());



const numbers: number[] = [1, 2, 3, 4, 5];

numbers.forEach(console.log);
