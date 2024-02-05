import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemonByNumber(pokemonNumber: number): Observable<any> {
    const url = `${this.apiUrl}pokemon/${pokemonNumber}`;
    return this.http.get(url);
  }

  getPokemonByName(pokemonName: string): Observable<any> {
    const url = `${this.apiUrl}pokemon/${pokemonName}`;
    return this.http.get(url);
  }
}
