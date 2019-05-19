import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-trackers',
  templateUrl: './trackers.component.html',
  styleUrls: ['./trackers.component.css']
})
export class TrackersComponent implements OnInit {

  public packages: any[];
  public numOrders = 0;

  constructor(public server: ServerService) { }

  orderPPs() {
    this.server.orderPPs(this.numOrders)
      .then(() => {
        this.server.getPackages();
        this.numOrders = 0;
      })
      .catch(err => console.error(err));
  }

  ngOnInit() {

    this.server.getPackagesObservable().subscribe(update => {
      if (update !== null) {
        this.packages = update.additionalData;
      }
    });
    this.server.getPackages();

  }

}
