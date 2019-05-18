import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  addressLine1: string;
  addressLine2: string;
  countryCode: string;
  cityLocality: string;
  stateProvince: string;
  postalCode: string;

  ngOnInit() {
  }

}
