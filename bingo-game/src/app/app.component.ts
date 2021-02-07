import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bingo-game';
  constructor(private router: Router) {}

  goCardGenerator() {
    this.router.navigate(['/cards']);
  }

  goCaller() {
    this.router.navigate(['/caller']);
  }
}
