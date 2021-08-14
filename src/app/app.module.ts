import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { BrowserModule } from '@angular/platform-browser';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  NgModule,
} from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtractComponent } from './extract/extract.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, NewTransferComponent, ExtractComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
  exports: [NewTransferComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
