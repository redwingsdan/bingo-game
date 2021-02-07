import { Injectable } from '@angular/core';

const MAX_BINGO_NUMBER = 75;
@Injectable()
export class BingoCallerService {
  calledNumbers = [];
  bingoNumber = 0;

  constructor() {
  }

  public getBingoCall() {
    if (this.calledNumbers.length >= MAX_BINGO_NUMBER) {
      this.clearCalledNumbers();
    }
    this.bingoNumber = this.getRandomInt(1, MAX_BINGO_NUMBER + 1);
    while (this.calledNumbers.includes(this.bingoNumber)) {
        this.bingoNumber = this.getRandomInt(1, MAX_BINGO_NUMBER + 1);
    }
    this.calledNumbers = this.calledNumbers.concat(this.bingoNumber);
    return this.bingoNumber;
  }

  public getCalledNumbers() {
    return this.calledNumbers;
  }

  public clearCalledNumbers() {
    this.calledNumbers = [];
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

}
