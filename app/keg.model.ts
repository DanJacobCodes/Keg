export class Keg {
  pints: number = 11;
  empty: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number){ }
}
