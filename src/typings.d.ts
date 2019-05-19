interface ServerResponse {
  errorCode: number;
  errorMessage?: string;
  additionalData?: any;
}

interface AddressServerResponse extends ServerResponse {
  addressLine1: string;
  addressLine2: string;
  cityLocality: string;
  stateProvince: string;
  postalCode: string;
  countryCode: string;
}
