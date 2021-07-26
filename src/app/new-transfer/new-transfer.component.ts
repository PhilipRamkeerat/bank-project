import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  value: number;
  destiny: number;

  public makeTransfer(): any {
    console.log('new transfer requested');
    console.log('Valor: ', this.value);
    console.log('Valor: ', this.destiny);
  }
}
