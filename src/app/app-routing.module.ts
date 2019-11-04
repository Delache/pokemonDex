import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsListComponent } from './pokemondex-page/pokemons-list/pokemons-list.component';
import { PokemonDetailComponent } from './pokemondex-page/pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  { path: 'pokemon', component: PokemonsListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
