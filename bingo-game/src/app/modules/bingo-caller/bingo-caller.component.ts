import { HostListener } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { BINGO_MAP } from './bingo-caller';
import { BingoCallerService } from './bingo-caller.service';

@Component({
  selector: 'bingo-caller',
  templateUrl: './bingo-caller.component.html',
  styleUrls: ['./bingo-caller.component.scss']
})
export class BingoCallerComponent implements OnInit {
  calledNumber: number;
  calledLetter: string;
  showAllNums = false;
  constructor(private service: BingoCallerService){}

  ngOnInit() {
    this.callNewNumber();
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnDestroy() {
    this.service.clearCalledNumbers();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code == 'Space') {
      this.callNewNumber();
    }
  }

  togglePreviousNumbers() {
    this.showAllNums = !this.showAllNums;
  }

  callNewNumber() {
    this.calledNumber = this.service.getBingoCall();
    for (const bingoLetter in BINGO_MAP) {
      if (BINGO_MAP[bingoLetter].includes(this.calledNumber)) {
          this.calledLetter = bingoLetter;
      }
    }
  }

  get calledNumbers() {
    return this.service.getCalledNumbers();
  }
}
