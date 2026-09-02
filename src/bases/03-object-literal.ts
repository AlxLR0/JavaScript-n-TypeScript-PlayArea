//una interface es un contrato que define la forma de un objeto, es decir, que propiedades y métodos debe tener un objeto para cumplir con ese contrato
interface Hero {
    firstName: string;
    lastName: string;
    age: number;

    //el signo de interrogación indica que la propiedad es opcional, es decir, que un objeto puede o no tener esa propiedad
    address?: {
        street: string;
        city: string;
        country: string;
    }
}

//se puede crear un objeto que cumpla con la interface Hero, es decir, que tenga las propiedades firstName, lastName y age
const ironman: Hero ={
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
}

//esto es para clonar un objeto, no es una referencia al mismo
// los datos de ironman no se van a modificar, sino que se crea un nuevo objeto con los mismos datos
// const spiderman = {...ironman};

//para crear un clon de un objeto y modificar algunas propiedades, se puede hacer de la siguiente manera
const spiderman = structuredClone(ironman);


//aqui se establecen nuevos valores para las propiedades del objeto spiderman, sin afectar al objeto ironman
spiderman.firstName = 'Peter';
spiderman.age = 30;

console.log(ironman, spiderman);