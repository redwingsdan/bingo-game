import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BINGO_MAP } from '../bingo-caller/bingo-caller';
import { BingoCallerService } from '../bingo-caller/bingo-caller.service';
import { BingoCard, CARD_COLUMNS, CARD_ROWS } from '../bingo-card/bingo-card';

@Component({
  selector: 'bingo-cards',
  templateUrl: './bingo-cards.component.html',
  styleUrls: ['./bingo-cards.component.scss']
})
export class BingoCardsComponent implements OnInit {
  numberOfCards = 1;
  cards: BingoCard[] = [];
  constructor(private service: BingoCallerService){}

  ngOnInit() {
    this.populateCards();
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  printCard() {
    window.print();
  }

  generateMoreCards() {
    //this.numberOfCards++;
    this.cards = [];
    this.populateCards();
  }

  populateCards() {
    for (let i = 0; i < this.numberOfCards; i++) {
      this.cards = this.cards.concat(this.populateCard({matchedNumbers: {}, numbers: {}}));
    }
  }

  populateCard(card: BingoCard) {
    for (const row of CARD_ROWS) {
      for (const col of CARD_COLUMNS) {
          card.matchedNumbers[col + row] = false;
          card.numbers[col + row] = this.getNumberForCell(col, row, card)
      }
    }
    return card;
  }

  resetCard(card: BingoCard) {
    for (const row of CARD_ROWS) {
      for (const col of CARD_COLUMNS) {
          card.matchedNumbers[col + row] = false;
      }
    }
  }

  getNumberForCell(col: string, row: string, card: BingoCard) {
    if (col == 'N' && row == '3') {
      return 'Free Space';
    }
    if (row == 'H') {
      return 'Header';
    }
    const startNum = BINGO_MAP[col][0];
    const endNum = BINGO_MAP[col][BINGO_MAP[col].length - 1];
    let cellNumber = this.service.getRandomInt(startNum, endNum + 1);
    while (Object.values(card.numbers).includes(cellNumber)) {
        cellNumber = this.service.getRandomInt(startNum, endNum + 1);
    }
    return cellNumber;
  }
}
