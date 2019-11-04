import { PokemondexPageComponent } from './pages/pokemondex-page/pokemondex-page.component';
import { CreatePokemonPageComponent } from './pages/create-pokemon-page/create-pokemon-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pokemon', component: PokemondexPageComponent },
  { path: 'create', component: CreatePokemonPageComponent },
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
