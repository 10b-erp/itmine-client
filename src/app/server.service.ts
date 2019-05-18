import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  // private function to run api call
  private makeApiCall(endpoint: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('load', response => {
        resolve(response);
      });
      xhr.addEventListener('error', err => {
        reject(err);
      });
      xhr.open('POST', '/api/' + endpoint);
      xhr.send(data);
    });
  }

  public signIn(email: string, password: string) {
    return this.makeApiCall('signin', {
      email: email,
      password: password
    });
  }

}
