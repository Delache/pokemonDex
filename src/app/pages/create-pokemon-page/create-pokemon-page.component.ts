import { PokemonsMock } from './../../shared/pokemons-mock';
import { Pokemon } from './../../shared/pokemon';
import { Router } from '@angular/router';
import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.scss']
})
export class CreatePokemonPageComponent implements OnInit {
newPokemon: Pokemon;
PokemonsMock: Pokemon[];
constructor(
  private router: Router) { }


ngOnInit() {
}

// La méthode appelée lorsque le formulaire est soumis.
onSubmit(): void {
  this.PokemonsMock.push(this.newPokemon);
  console.log('Submit form !');
  const link = ['/pokemon'];
  this.router.navigate(link);
}

}

