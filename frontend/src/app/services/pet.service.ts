import { Injectable } from '@angular/core';
import {Pet} from "../models/Pet";
// import HttpClient for API call
// Httpheaders --> manage header
import { HttpClient, HttpHeaders } from '@angular/common/http';
// HttpClient return Observable
import {Observable} from "rxjs";

// set header for post request
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class PetService {
  // API call url
  apiUrl: string = '/api/pets';
  // inject HttpClient
  constructor(private http: HttpClient) { }
  // HttpClient return Observable
  // API call--get request
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }
  // API call -- post request
  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl, pet, httpOptions);
  }

  updatePet(targetPet: Pet): Observable<Pet> {
    const url = `${this.apiUrl}/${targetPet._id}`;
    return this.http.patch<Pet>(url, targetPet, httpOptions);
  }

  removePet(id: string): Observable<Pet> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Pet>(url, httpOptions);
  }

  getPet(id: string): Observable<Pet> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pet>(url);
  }
}
