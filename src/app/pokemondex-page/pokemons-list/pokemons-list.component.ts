import { Component, OnInit } from '@angular/core';
import { PokedexServiceService } from './../../pokedex-service.service';
import { Pokemon } from './../../pokemon';
import { ActivatedRoute, Router, Params } from '@angular/router';


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
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-detail-pokemon',
templateUrl: './detail-pokemon.component.html',
styleUrls: ['./detail-pokemon.component.scss']
})

export class DetailPokemonComponent implements OnInit {

pokemons: Pokemon[] = null;
pokemon: Pokemon = null;

constructor(private route: ActivatedRoute, private router: Router, private service: PokemonsService) {}

ngOnInit() {
  this.pokemons = this.service.pokemons;

  const id = +this.route.snapshot.paramMap.get('id');
  for (let i = 0; i < this.pokemons.length; i++) {
    if (this.pokemons[i].id === id) {
      this.pokemon = this.pokemons[i];
    }
  }
}
goBack(): void {
  this.router.navigate(['/pokemons']);
}
goEdit(pokemon: Pokemon): void {
  const link = ['/pokemon/edit', pokemon.id];
  this.router.navigate(link);
}
}
