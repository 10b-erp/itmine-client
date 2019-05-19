import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  // address fields
  public addressLine1: string;
  public addressLine2: string;
  public cityLocality: string;
  public stateProvince: string;
  public postalCode: string;
  public countryCode = 'US';

  public addressMap: string;

  @Input() address;
  @Output() addressChange = new EventEmitter<any>();

  constructor(private server: ServerService) { }

  public onAddressChanged() {
    this.addressChange.emit({
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      cityLocality: this.cityLocality,
      stateProvince: this.stateProvince,
      postalCode: this.postalCode,
      countryCode: this.countryCode
    });

    this.validateAddress();
  }

  private validateAddress() {
    this.server.validateAddress({
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      cityLocality: this.cityLocality,
      stateProvince: this.stateProvince,
      postalCode: this.postalCode,
      countryCode: this.countryCode
    })
      .then(response => {
        this.addressLine1 = response.additionalData.address_line1;
        // this.addressLine2 = response.additionalData.address_line2;
        this.cityLocality = response.additionalData.city_locality;
        this.stateProvince = response.additionalData.state_province;
        this.postalCode = response.additionalData.postal_code;
        this.countryCode = response.additionalData.country_code;
      })
      .catch(err => console.error(err));
  }

}
