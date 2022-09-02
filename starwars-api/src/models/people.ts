import { Film } from "./films";
import { Specie } from "./specie";
import { Starship } from "./starship";

export class People {
    birth_year?: string;
    eye_color?: string;
    films?: Film[];
    gender?: string;
    hair_color?: string;
    height?: string;
    homeworld?: string;
    mass?: string;
    name?: string;
    skin_color?: string;
    created?: string;
    edited?: string;
    species?: Specie[];
    starships?: Starship[];
    url?: string;
    vehicules?: string[];
}