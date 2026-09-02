// se puede crear un array de números de la siguiente manera
const myArray: number[] = [1, 2, 3, 4, 5];

// para crear un clon de un array y modificar algunas propiedades, se puede hacer de la siguiente manera
const myArray2 = [...myArray];

myArray2.push(6);

console.log(myArray, myArray2);