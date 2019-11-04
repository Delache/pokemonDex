import { Pokemon } from '../../shared/pokemon';
import { PokedexServiceService } from '../../shared/pokedex-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemons: Pokemon[] = null;
  pokemon: Pokemon = null;

constructor(private route: ActivatedRoute, private router: Router, private service: PokedexServiceService) {}

ngOnInit() {
  this.pokemons = this.service.getPokemons();

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
