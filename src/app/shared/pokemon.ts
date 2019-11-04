export class Pokemon {
  id: number;
  name: string;
  picture: string;
  details: string;

  constructor(input?: Pokemon) {
    if (input != null) {
    Object.assign(this, input);
    }
  }
}
