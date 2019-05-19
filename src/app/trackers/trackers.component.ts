import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';
import {text} from '@angular/core/src/render3';

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
        this.packages.forEach(pack => {
          const data = this.server.baseUrl + '/found?sid=' + pack._id.toString();
          pack.qrCode = 'https://chart.googleapis.com/chart?cht=qr&chs=128x128&chl=' + encodeURI(data);
        });
      }
    });
    this.server.getPackages();

  }

}
