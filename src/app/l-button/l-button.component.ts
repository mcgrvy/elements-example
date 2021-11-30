import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'l-button',
  template: `
    <button (click)="getRandomQuote()">
      <ng-content></ng-content>
    </button>

    <div *ngIf="quote" class="message">
      <p>{{quote.text}}<p>
      <p>{{quote.author}}<p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      padding: 20px;
      background: #efefef;
      border-radius: 5px;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
    button {
      float: right;
    }
    .message {
      padding-top: 20px;
      clear: both;
    }
    p {
      margin-bottom: 20px;
    }
  `]
})
export class LButtonComponent implements OnInit {

  @Output() newQuote = new EventEmitter();

  public quotes: any = [];
  public quote: any;

  constructor(
      private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.http.get('https://type.fit/api/quotes')
      .subscribe(
        data => {
          this.quotes = data;
          this.quote = this.quotes[this.quotes.length * Math.random() | 0];
        }
    );

    this.getRandomQuote();
  }

  public getRandomQuote(): void {
    this.quote = this.quotes[this.quotes.length * Math.random() | 0];
    this.newQuote.emit();
  }

}
