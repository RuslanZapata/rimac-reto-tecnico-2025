import type { DocumentNumber } from "./documentNumber.interface";

export interface FormInput {
  label?: string;
  onChange?: (e:React.ChangeEvent<HTMLInputElement>)=>void ;
  errorMessage?: string;
  entranceWidth?: boolean;
  inputProps?: DocumentNumber;
  className?: string;
}
