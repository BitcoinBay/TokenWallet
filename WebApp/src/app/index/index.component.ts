import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public mnemonic: string = "";
  public walletStore: any = {};
  public seedPhrase: string = "";

  constructor(private wallet: WalletService, private router: Router) {

  }

  ngOnInit() {

  }

  login() {

    this.wallet.loginWallet(this.mnemonic, (err, value) => {
      if (err) {
        console.log("Error", err);
      } else {
        this.walletStore = value.walletStore;
        console.log(this.walletStore);
        this.router.navigate(['/wallet']);
      }
    });
  }

}
