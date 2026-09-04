//se crea una interfaz para definir la estructura de un héroe
export interface Hero{
    id:number;
    name:string;
    //aqui owner es un tipo de dato que solo puede ser 'DC' o 'Marvel', para evitar errores de tipeo y asegurar que solo se usen esos valores
    owner:Owner;
}

//esto es para definir un tipo de dato que solo puede ser 'DC' o 'Marvel', para evitar errores de tipeo y asegurar que solo se usen esos valores
// type Owner = 'DC' | 'Marvel';

// el enum es una forma de definir un tipo de dato que solo puede tener ciertos valores, en este caso 'DC' o 'Marvel', y se puede usar en lugar del type Owner
export enum Owner {
    DC = 'DC',
    Marvel = 'Marvel'
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
];


//otra forma de exportar el array de héroes, es exportando cada héroe individualmente, pero esto no es recomendable porque se pierde la relación entre los héroes y se hace más difícil de mantener
// export default heroes;