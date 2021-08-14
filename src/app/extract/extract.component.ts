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
    this.transferObj = this.transferService.transfers; // Receive from get method
  }
}
