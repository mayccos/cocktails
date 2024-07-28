import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Cocktail } from './interfaces/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'cocktails';
  counter: number = 0;
  private subscription!: Subscription;

  ngOnInit() {
    this.subscription = interval(1000).subscribe(() => {
      this.counter++;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  cocktail: Cocktail = {
    name: 'Mojito',
    img: 'https://www.hangoverweekends.co.uk/uploads/images/mojito.jpg',
    description:
      'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
  };
}
