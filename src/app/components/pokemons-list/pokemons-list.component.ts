import { Component, OnInit } from '@angular/core';
import { PokedexServiceService } from '../../shared/pokedex-service.service';
import { Pokemon } from '../../shared/pokemon';


@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemon[] = null;
  constructor(private service: PokedexServiceService) { }
  ngOnInit() {
    this.pokemons = this.service.getPokemons();
  }
}
