import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank-project';
  transferences: any[] = [];

  public transfer($event): any {
    console.log($event);
    const transfer = {...$event, date: new Date()};
    this.transferences.push(transfer);
  }
}
