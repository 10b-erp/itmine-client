import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {

  constructor(private server: ServerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const sid = params['sid'];
      this.server.checkSid(sid)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

}
