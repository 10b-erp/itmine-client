import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {

  constructor() { }

  public userEmail: string;
  public userPassword: string;

  ngOnInit() {
  }

  signIn() {
    alert(this.userEmail + ' ' + this.userPassword);
  }
}
