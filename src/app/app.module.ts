import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePokemonPageComponent } from './pages/create-pokemon-page/create-pokemon-page.component';
import { PokemondexPageComponent } from './pages/pokemondex-page/pokemondex-page.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePokemonPageComponent,
    PokemondexPageComponent,
    PokemonDetailComponent,
    PokemonListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
