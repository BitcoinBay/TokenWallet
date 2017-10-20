import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  public page: string = 'send';
  public address: string = "";

  constructor(private wallet: WalletService) { }

  ngOnInit() {
    this.address = "0x" + this.wallet.address;
  }

}
