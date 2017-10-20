import { Component, OnInit, ApplicationRef } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class KeysComponent implements OnInit {

  public seed: string = "";
  public walletStore: Object = "";

  constructor(private wallet: WalletService, private ref: ApplicationRef) {

  }

  ngOnInit() {
    this.wallet.generateWallet((err, value) => {
      if (err) {
        console.log("Error", err);
      } else {
        this.seed = value.seed;
        this.walletStore = value.wallet;
      }
    });
  }

  login() {
    window.location.assign('/wallet');
  }

}
