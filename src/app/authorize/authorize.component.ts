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
        // handle successful signing in
      })
      .catch(err => {
        // handle unsuccessful signing in
      });
  }

  toggleSignInOut() {
    this.signInOut = !this.signInOut;
  }
}
