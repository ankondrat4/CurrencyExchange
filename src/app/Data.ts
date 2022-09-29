export class Rate{
  from!: string;
  to!: string;
  rate!: number;
}

export const ITEMS: string[] = ["UAH","EUR","USD"]

export const Rates: Rate[] = [
  {from: "UAH", to: "USD", rate:45},
  {from: "USD", to: "UAH", rate:43},
  {from: "UAH", to: "EUR", rate:43},
  {from: "EUR", to: "UAH", rate:42},
  {from: "USD", to: "EUR", rate:1.2},
  {from: "EUR", to: "USD", rate:0.9},
];

export function getRate(from:string, to:string):number {
  if (from===to) return 1;

  for(let i:number = 0; i<6; i++){
    let r = Rates[i];

    if (r.from == from && r.to == to) {
      return r.rate;
    }
  }
  return 0;
}
