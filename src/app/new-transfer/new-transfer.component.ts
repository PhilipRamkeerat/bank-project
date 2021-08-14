import { Transference } from './../models/transference.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() transferEvent = new EventEmitter<any>();

  value: number;
  destiny: number;

  constructor(private transferService: TransferService) {}

  public makeTransfer(): any {
    console.log('new transfer requested');

    const emitValue: Transference = {
      value: this.value,
      destiny: this.destiny,
    };

    this.transferService.add(emitValue).subscribe(
      (result) => {
        console.log(result);
        this.cleanFields();
      },
      (error) => console.error(error)
    );
  }

  public cleanFields(): any {
    this.value = 0;
    this.destiny = 0;
  }
}
