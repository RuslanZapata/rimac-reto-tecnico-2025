export interface CustomerCard {
  isChecked: boolean;
  onChange: (a:string)=>void ;
  title: string;
  description: string;
  whoUser: string;
}
