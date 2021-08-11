import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() transferEvent = new EventEmitter<any>();

  value: number;
  destiny: number;

  public makeTransfer(): any {
    console.log('new transfer requested');

    const emitValue = { value: this.value, destiny: this.destiny };
    this.transferEvent.emit(emitValue);

    this.cleanFields();
  }

  public cleanFields(): any {
    this.value = 0;
    this.destiny = 0;

    if (this.value === this.destiny) {
     const a = 10;
     const b = 5;
    }
  }
}
