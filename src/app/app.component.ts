import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank-project';
  transferObj: any;

  public transfer($event): any {
    console.log($event);
    this.transferObj = $event;
  }
}
