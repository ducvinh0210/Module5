import {CustomerType} from "./customerType";

export interface Customer {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  gender?:number;
  idCard?:string ;
  phoneNumber?:string;
  email?:string;
  customerType?:CustomerType;
  address?:string;
}
