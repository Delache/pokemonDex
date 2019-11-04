import { PokedexServiceService } from './../../shared/pokedex-service.service';
import { PokemonsMock } from './../../shared/pokemons-mock';
import { Router } from '@angular/router';
import { Pokemon } from './../../shared/pokemon';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.scss']
})
export class CreatePokemonPageComponent implements OnInit {
  pokemon: Pokemon = new Pokemon();
  PokemonsMock: Pokemon[];

  constructor( private router: Router, private service: PokedexServiceService) {}

ngOnInit() {
}

onSubmit(pokemon: Pokemon): any {
    console.log(this.pokemon);
    PokemonsMock.push(this.pokemon);
    console.log(PokemonsMock);
    this.router.navigate(['/pokemon']);


  }
}



