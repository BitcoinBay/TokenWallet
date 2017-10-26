import { Injectable } from '@angular/core';

declare var Web3;
const web3 = new Web3(new Web3.providers.HttpProvider("http://104.236.210.179:8545"));

declare var lightwallet;

@Injectable()
export class WalletService {

  public seed: string = "";
  public walletStore: Object = {};
  public address: string = "";

  constructor() { }

  logWallet() {
    console.log(this.walletStore, this.seed);
  }

  loginWallet(seed, callback) {
    console.log("seed", seed);
    console.log(lightwallet);
    // lightwallet.keystore.deriveKeyFromPassword(
    //   seed,
    //   (err, value) => {
    //     console.log(err, value);
    //     this.seed = seed;
    //     this.walletStore = value;
    //     this.address = lightwallet.keystore._computeAddressFromPrivKey(value, "curve25519");
    //     callback(err, {
    //       'seed': seed,
    //       'wallet': value,
    //       'address': this.address
    //     })
    //   }
    // );
    var keystore = lightwallet.keystore;
    debugger;
    var password = 'mypass'
    keystore.createVault({
      password: password,
      seedPhrase: seed,
      hdPathString: "m/44'/60'/0'/0",
    }, (error, ks) => {
      ks.keyFromPassword(password, (e, pwDerivedKey) => {
        if(e) throw e;
        ks.generateNewAddress(pwDerivedKey, 1);
        var addr = ks.getAddresses()[0];
        this.address = addr;
        callback(e, {
          seed: seed,
          wallet: ks,
          address: this.address
        });
      })
    })
  }

  generateWallet(callback) {
    let seed = lightwallet.keystore.generateRandomSeed();
    console.log(lightwallet);
    lightwallet.keystore.deriveKeyFromPassword(
      seed,
      (err, value) => {
        console.log(err, value);
        this.seed = seed;
        this.walletStore = value;
        this.address = lightwallet.keystore._computeAddressFromPrivKey(value, "curve25519");
        callback(err, {
          'seed': seed,
          'wallet': value,
          'address': this.address
        })
      }
    );
  }

}
