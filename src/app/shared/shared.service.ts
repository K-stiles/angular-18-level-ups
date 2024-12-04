import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  sumTotal = 0;
  constructor() {}

  sum(a: number, b: number) {
    this.sumTotal = a + b;
  }
}
