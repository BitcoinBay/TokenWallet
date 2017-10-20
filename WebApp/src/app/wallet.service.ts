import { Injectable } from '@angular/core';

declare var lightwallet;

@Injectable()
export class WalletService {

  public seed: string = "";

  constructor() { }

  generateWallet(callback) {
    let seed = lightwallet.keystore.generateRandomSeed();
    lightwallet.keystore.createVault(
      {
        'password': 'none',
        'seedPhrase': seed
      },
      (err, value) => {
        console.log(err, value);
        callback(err, {
          'seed': seed,
          'wallet': value
        })
      }
    );
  }

}
