import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BingoCardsRoutes } from './bingo-cards.routes';
import { BingoCardsComponent } from './bingo-cards.component';
import { BingoCardComponent } from '../bingo-card/bingo-card.component';

@NgModule({
  declarations: [
    BingoCardsComponent, BingoCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(BingoCardsRoutes)
  ],
  providers: [],
  exports: [BingoCardsComponent]
})
export class BingoCardsModule { }
