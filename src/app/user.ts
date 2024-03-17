interface FullAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo : {
    lat: string;
    lng: string;
  };
}

interface Company {
  [key: string]: string
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: FullAddress;
  company: Company;
  [key: string]: string | number | FullAddress | {
    [key: string]: string
  }
}
