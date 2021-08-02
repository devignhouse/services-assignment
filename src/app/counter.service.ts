import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active -> Inactive : ' + this.activeToInactiveCounter);
  }
  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive -> Active : ' + this.inactiveToActiveCounter);
  }
}
