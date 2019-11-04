import { Component, OnInit } from '@angular/core';
import { PokedexServiceService } from './../../shared/pokedex-service.service';
import { Pokemon } from './../../shared/pokemon';
@Component({
  selector: 'app-pokemondex-page',
  templateUrl: './pokemondex-page.component.html',
  styleUrls: ['./pokemondex-page.component.scss']
})
export class PokemondexPageComponent implements OnInit {
  pokemons: Pokemon[] = null;
  pokemonClicked: Pokemon;
  constructor( private service: PokedexServiceService ) { }

  ngOnInit() {
    this.pokemons = this.service.getPokemons();
  }
receivePokemon($event: Pokemon) {
   this.pokemonClicked = $event;

  }
}

