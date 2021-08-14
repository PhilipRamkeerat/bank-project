import { TransferService } from './services/transfer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bank-project';
  transferences: any[] = [];

  constructor(private transferService: TransferService) {}

  public transfer($event): any {
    this.transferService.add($event);
  }
}
