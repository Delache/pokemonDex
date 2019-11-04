import { Injectable } from '@angular/core';
import { PokemonsMock } from './pokemons-mock';
import { Pokemon } from './pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokedexServiceService {
  constructor() { }
  getPokemons(): Pokemon[] {
    return PokemonsMock;
}
}
