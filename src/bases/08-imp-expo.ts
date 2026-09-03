import { heroes } from './data/heroes.data';
import type { Hero } from './data/heroes.data';


export const getHeroById = (id: number): Hero | undefined => {
    return heroes.find((hero) => hero.id === id);
};