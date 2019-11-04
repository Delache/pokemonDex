import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemondexPageComponent } from './pokemondex-page/pokemondex-page.component';
import { CreatePokemonPageComponent } from './create-pokemon-page/create-pokemon-page.component';
import { PokemonsListComponent } from './pokemondex-page/pokemons-list/pokemons-list.component';
import { PokemonDetailComponent } from './pokemondex-page/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemondexPageComponent,
    CreatePokemonPageComponent,
    PokemonsListComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
