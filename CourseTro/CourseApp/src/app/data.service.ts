import { Injectable } from '@angular/core';

@Injectable()//may add injection dependencies here like a database or w/e otherwise lines 1-3 aren't needed

export class DataService {

  constructor() { }

  bitches = [
      'Titsy', 'Busty', 'Chesty', 'Bottom Bitch'
  ];

  myBitches() {
      return this.bitches;
  }

}
