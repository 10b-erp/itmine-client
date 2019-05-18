import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  // address fields
  public addressLine1: string;
  public addressLine2: string;
  public cityLocality: string;
  public stateProvince: string;
  public postalCode: string;
  public countryCode = 'US';

  ngOnInit() {
  }

}
