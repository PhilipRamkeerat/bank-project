import { Transference } from './../models/transference.model';
import { Component, Input, OnInit } from '@angular/core';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  @Input() transferObj: any[]; // Get values from parent

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    this.transferService.getAll().subscribe((transferences: Transference[]) => {
      console.table(transferences);
      this.transferObj = transferences;
    });
  }
}
