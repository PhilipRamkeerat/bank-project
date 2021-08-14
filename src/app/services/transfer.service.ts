import { Transference } from './../models/transference.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  transferList: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.transferList = [];
  }

  get transfers(): any {
    return this.transferList;
  }

  getAll(): Observable<Transference[]> {
    return this.httpClient.get<Transference[]>(this.url);
  }

  add(transfer: any): any {
    this.hydrate(transfer);

    this.transferList.push(transfer);
  }

  private hydrate(transfers: any): any {
    transfers.date = new Date();
  }
}
