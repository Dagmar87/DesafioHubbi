import { Film } from './films';
import { People } from './people';

export class Vehicle {
  cargo_capacity?: string;
  consumables?: string;
  cost_in_credits?: string;
  created?: string;
  crew?: string;
  edited?: string;
  length?: string;
  manufacturer?: string;
  max_atmosphering_speed?: string;
  model?: string;
  name?: string;
  passengers?: number;
  pilots?: People[];
  films?: Film[];
  url?: string;
  vehicle_class?: string;
}
