import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { WalletService } from './wallet.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { KeysComponent } from './keys/keys.component';
import { WalletComponent } from './wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    KeysComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          'path': '',
          'component': IndexComponent
        },
        {
          'path': 'keys',
          'component': KeysComponent
        },
        {
          'path': 'wallet',
          'component': WalletComponent
        }
      ]
    )
  ],
  providers: [
    WalletService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
