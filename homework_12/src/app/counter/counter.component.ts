import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <button (click)="dec()">-</button>
    <strong>{{counterValue}}</strong>
    <button (click)="inc()">+</button>
  `,
  styles: [
    'strong { padding: 0 5px }'
  ]
})
export class CounterComponent implements OnInit {
  @Input() counterValue: number;
  @Output() onChange;

  constructor() {
    this.onChange = new EventEmitter();
  }

  ngOnInit() { }

  dec() {
    this.counterValue = this.counterValue - 1;
    this.onChange.emit(this.counterValue);
  }

  inc() {
    this.counterValue = this.counterValue + 1;
    this.onChange.emit(this.counterValue);
  }

}
