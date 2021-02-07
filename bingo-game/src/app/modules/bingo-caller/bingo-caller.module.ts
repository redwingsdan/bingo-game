import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BingoCallerComponent } from './bingo-caller.component';
import { RouterModule } from '@angular/router';
import { BingoCallerRoutes } from './bingo-caller.routes';

@NgModule({
  declarations: [
    BingoCallerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(BingoCallerRoutes)
  ],
  providers: [],
  exports: [BingoCallerComponent]
})
export class BingoCallerModule { }
