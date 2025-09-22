export interface Plan {
  dataUser:     DataUser;
  dataCustomer: DataCustomer;
  dataPlan:     DataPlan;
}

export interface DataCustomer {
  typeDocument?:                   string;
  documentNumber?:                 string;
  phone?:                          string;
  PrivacyPolicy?:                  boolean;
  CommercialCommunicationsPolicy?: boolean;
}

export interface ListDataPlan {
  list: DataPlan[]
}

export interface DataPlan {
  name?:        string;
  price?:       number;
  description?: string[];
  age?:         number;
  user?:        string;
}

export interface DataUser {
  name?:     string;
  lastName?: string;
  birthDay?: string;
  age?:      number;
}
