import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  private secretKey: string = 'mahesh_fc';

  encrypt(data: any): string {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
    return encryptedData;
  }

  decrypt(encryptedData: string): any {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }
}



// use it in component data to encrypyt and decrypt

// this is for encrypt
      // const encryptedData = this.encryptionService.encrypt(data);
      // console.log(encryptedData);

// this is for decrypt
      // const decryptedData = this.encryptionService.decrypt(encryptedData);
      // console.log(decryptedData);
   