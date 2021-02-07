import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { BingoCard, CARD_COLUMNS, CARD_ROWS } from './bingo-card';

@Component({
  selector: 'bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.scss']
})
export class BingoCardComponent implements OnInit {
  @Input() card: BingoCard;
  @Output() reset = new EventEmitter<any>();
  rows = CARD_ROWS;
  cols = CARD_COLUMNS;
  constructor(){}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  toggleCell(col: string, row: string) {
    if (row == 'H') {
      return;
    }
    this.card.matchedNumbers[col + row] = !this.card.matchedNumbers[col + row];
  }

  resetCard() {
    this.reset.emit(this.card);
  }
}
