import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BingoCallerModule } from './modules/bingo-caller/bingo-caller.module';
import { BingoCardsModule } from './modules/bingo-cards/bingo-cards.module';
import { BingoCallerService } from './modules/bingo-caller/bingo-caller.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BingoCallerModule,
    BingoCardsModule
  ],
  providers: [BingoCallerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
