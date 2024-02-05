import { Component } from '@angular/core';
import { ApiService } from '../Services/apiservice.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemonNumber: number = 1;
  pokemonName: string = 'bulbasaur';
  firstPokemon: any; // Almacena la información del primer card
  secondPokemon: any; // Almacena la información del segundo card

  constructor(private apiService: ApiService) {}

  getPokemonByNumber() {
    this.apiService.getPokemonByNumber(this.pokemonNumber)
      .subscribe(data => {
        this.firstPokemon = data;
      });
  }

  getPokemonByName() {
    this.apiService.getPokemonByName(this.pokemonName)
      .subscribe(data => {
        this.secondPokemon = data;
      });
  }
}
