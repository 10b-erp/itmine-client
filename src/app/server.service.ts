import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  // private function to run api call
  private makeApiCall(endpoint: string, data: any): Promise<ServerResponse> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('load', function() {
        console.log(this.response);
        if (this.response.errorCode === 0) {
          resolve(this.response);
        } else {
          reject(this.response);
        }
      });
      xhr.addEventListener('error', function() {
        reject(this.response);
      });
      xhr.responseType = 'json';
      xhr.open('POST', '/api/' + endpoint, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    });
  }

  public signIn(email: string, password: string): Promise<ServerResponse> {
    return this.makeApiCall('signin', {
      email: email,
      password: password
    });
  }

  public validateAddress(address): Promise<AddressServerResponse> {
    return <Promise<AddressServerResponse>> this.makeApiCall('validateaddress', address);
  }
}
