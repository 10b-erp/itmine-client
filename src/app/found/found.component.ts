import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {

  public weight: number;
  public isInvalidSid = false;
  public giftEmail = '';

  private sid: string;

  constructor(private server: ServerService, private activatedRoute: ActivatedRoute) { }

  public setWeight() {
    if(!this.isInvalidSid) {
      this.server.setPackageWeight(this.sid, this.weight)
        .then(response => {
          console.log(response.additionalData);
        })
        .catch(err => {
          console.log(err.errorMessage);
        });
    }
  }

  public setGiftEmail() {
    if(!this.isInvalidSid) {
      this.server.setPackageGiftEmail(this.sid, this.giftEmail);
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const sid = params['sid'];
      this.sid = sid;
      this.server.checkSid(sid)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
          this.isInvalidSid = true;
        });
    });
  }

}
