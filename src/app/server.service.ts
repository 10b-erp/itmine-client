import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  // observable to track when signed in
  public userDetails = new BehaviorSubject<any>(null);
  public packagesObservable = new BehaviorSubject<any>(null);

  public baseUrl = 'https://itmine.herokuapp.com/';

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

  // sign out
  public signOut() {
    return this.makeApiCall('signout', {});
  }

  // validate address using shipengine api
  public validateAddress(address): Promise<any> {
    return <Promise<any>> this.makeApiCall('validateaddress', address);
  }

  // check if signed in
  public getUserDetails() {
    this.makeApiCall('userdetails', {})
      .then(response => {
        this.userDetails.next(response);
      })
      .catch(err => {
        // 4 is successful sign out
        if (err.errorCode === 4) {
          this.userDetails.next(null);
        } else {
          console.error(err.errorMessage);
        }
      });
  }

  // get user's packages
  public getPackages() {
    this.makeApiCall('packages', {})
      .then(response => this.packagesObservable.next(response))
      .catch(err => console.error(err));
  }
  public getPackagesObservable() {
    return this.packagesObservable;
  }

  // order new pps
  public orderPPs(numPPs: number) {
    return this.makeApiCall('orderpps', { n: numPPs });
  }

  // check if sid exists
  public checkSid(sid: string) {
    return this.makeApiCall('checksid', { sid: sid });
  }

  // set package data
  public setPackageGiftEmail(sid: string, giftEmail: string) {
    return this.makeApiCall('setpackagegiftemail', { sid: sid, giftEmail: giftEmail });
  }
  public setPackageWeight(sid: string, weight: number) {
    return this.makeApiCall('setpackageweight', { sid: sid, weight: weight });
  }

}
