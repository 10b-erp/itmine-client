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

  // sign in
  public signIn(email: string, password: string): Promise<ServerResponse> {
    return this.makeApiCall('signin', {
      email: email,
      password: password
    });
  }

  // sign up
  public signUp(email: string, password: string, name: string, phone: string, address: any, companyName: string): Promise<ServerResponse> {
    return this.makeApiCall('signup', {
      email: email,
      password: password,
      address: address,
      name: name,
      phone: phone,
      company: companyName
    });
  }

  // validate address using shipengine api
  public validateAddress(address): Promise<any> {
    return <Promise<any>> this.makeApiCall('validateaddress', address);
  }

  // check if signed in
  public getUserDetails() {
    this.makeApiCall('userdetails', {})
      .then(response => {
        console.log(response);
      })
      .catch(err => console.error(err));
  }

  constructor() {
    this.getUserDetails();
  }
}
