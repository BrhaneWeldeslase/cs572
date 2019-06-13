import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <app-dumb [Familes]="data"></app-dumb>
    
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  data:object[];
  constructor() {
    this.data=[{'name':'Hamza','memberType':'son','age':4}, {'name':'Habiba','memberType':'daughter','age':1.5}, {'name':'Islam','memberType':'brother','age':24}, {'name':'Said','memberType':'father','age':64}];
  }

  ngOnInit() {
  }

}
