import { Pokemon } from './../../shared/pokemon';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})



export class PokemonListComponent implements OnInit {
click = true;
button = 'Plus';
@Input() pokemon: Pokemon ;
@Output() details = new EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit() {
  }
  seeMore(pokemon: Pokemon) {
    this.details.emit(pokemon);
    (this.click) ? this.button = 'Moins' : this.button = 'plus';
    this.click = !this.click;
  }

}
