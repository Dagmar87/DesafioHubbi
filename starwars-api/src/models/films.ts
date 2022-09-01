import { People } from "./people";
import { Planet } from "./planet";
import { Specie } from "./specie";
import { Starship } from "./starship";
import { Vehicle } from "./vehicle";

export interface Film {
    characters: People[];
    created: string;
    director: string;
    edited: string;
    episode_id: number;
    opening_crawl: string;
    planets: Planet[];
    producer: string;
    release_date: string;
    speacies: Specie[];
    starships: Starship[];
    title: string;
    url: string;
    vehicles: Vehicle[];
}