import { Film } from "./films";
import { People } from "./people";

export class Specie {
    average_height?: string;
    average_lifespan?: string;
    classification?: string;
    created?: string;
    designation?: string;
    edited?: string;
    eye_colors?: string;
    hair_colors?: string;
    homeworld?: string;
    language?: string;
    name?: string;
    people?: People[];
    films?: Film[];
    skin_colors?: string;
    url?: string;
}