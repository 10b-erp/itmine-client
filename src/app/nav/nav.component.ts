import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public userDetails;

  constructor(private server: ServerService, private router: Router) { }

  get isSignedIn() {
    return this.userDetails !== null;
  }

  ngOnInit() {
    this.server.getUserDetails();
    this.server.userDetails.subscribe(userDetailPush => {
      this.userDetails = userDetailPush;
    });
  }

  public signOut() {
    this.server.signOut()
      .then(() => {
        this.server.getUserDetails();
        this.router.navigateByUrl('/')
          .then(() => {});
      })
      .catch(err => console.error(err));
  }

}
