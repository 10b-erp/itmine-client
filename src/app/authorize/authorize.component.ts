import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {

  constructor(private server: ServerService) { }

  public userEmail: string;
  public userPassword: string;
  public userName: string;
  public userPhone: string;
  public companyName: string;

  public address = {
    addressLine1: '',
    addressLine2: '',
    cityLocality: '',
    stateProvince: '',
    postalCode: '',
    countryCode: 'US'
  };

  public signInOut = false;

  ngOnInit() {
  }

  signIn() {
    this.server.signIn(this.userEmail, this.userPassword)
      .then(response => {
        console.log('successfully signed in');
      })
      .catch(err => {
        console.error('Error signing in: ' + err.errorMessage);
      });
  }

  signUp() {
    this.server.signUp(this.userEmail, this.userPassword, this.userName, this.userPhone, this.address, this.companyName)
      .then(response => {
        console.log('successfully signed up');
      })
      .catch(err => {
        console.error('Error signing up: ' + err.errorMessage);
      });
  }

  toggleSignInOut() {
    this.signInOut = !this.signInOut;
  }
}
