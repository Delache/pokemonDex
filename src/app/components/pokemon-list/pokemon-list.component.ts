import { Pokemon } from './../../shared/pokemon';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})



export class PokemonListComponent implements OnInit {
@Input() pokemon: Pokemon ;
  constructor() { }

  ngOnInit() {
  }

}
