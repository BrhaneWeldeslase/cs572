import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <div appIsVisible [isVisible]="true">
    My family list!
    <table>
    <tr>
    <td>Name</td>
    <td>Member Type</td>
    <td>Age</td>

    </tr>
    <tr *ngFor="let memeber of familes">
    <td appMakeBigger [ngStyle]="{'font-size':'15px'}">{{memeber.name}}</td>
    <td>{{memeber.memberType | multi:2}}</td>
    <td>{{memeber.age}}</td>

    </tr>
    </table>
  `,
  styles: []
})
export class DumbComponent implements OnInit {
  @Input('Familes') familes;
  constructor() { }

  ngOnInit() {

  }

}
