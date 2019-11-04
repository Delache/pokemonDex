import { PokemonsMock } from './pokemons-mock';

describe('PokemonsMock', () => {
  it('should create an instance', () => {
    expect(new PokemonsMock()).toBeTruthy();
  });
});
