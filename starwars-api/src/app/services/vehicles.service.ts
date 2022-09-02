import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vehicle } from "src/models/vehicle";

const endpoint = 'https://swapi.dev/api/vehicles/';

@Injectable({ providedIn: 'root' })

export class VehicleService {    

    constructor(private http: HttpClient) {}

    getAllVehicle(): Observable<Vehicle[]> {
        return this.http.get<Vehicle[]>(endpoint);
    }
}