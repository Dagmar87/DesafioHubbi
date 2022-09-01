import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vehicle } from "src/models/vehicle";

@Injectable({ providedIn: 'root' })

export class VehicleService {
    private readonly endpoint = 'https://swapi.dev/api/starships/9/';

    constructor(private http: HttpClient) {}

    getAllVehicle(): Observable<Vehicle> {
        return this.http.get<Vehicle>(this.endpoint);
    }
}