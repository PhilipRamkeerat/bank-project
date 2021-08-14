import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  transferList: any[];

  constructor() {
    this.transferList = [];
  }

  get transfers(): any {
    return this.transferList;
  }

  add(transfer: any): any {
    this.hydrate(transfer);

    this.transferList.push(transfer);
  }

  private hydrate(transfers: any): any {
    transfers.date = new Date();
  }
}
