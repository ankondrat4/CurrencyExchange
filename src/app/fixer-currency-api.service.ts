import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResultAPI} from "./resultAPI";
import {registerLocaleData} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class FixerCurrencyAPIService {

  convert! : any;
  symbols!: any;

  constructor(private http:HttpClient) { }

  getSymbols() {
    const options = {
      method: 'GET',
      url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/symbols',
      headers: {
        'X-RapidAPI-Key': '795679bb1emshda08239ff6d6e14p1705a0jsn1be511a66ae9',
        'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com'
      }
    };

    let res:any = this.http.get(options.url, options);
    let tmp = res.subscribe((data: any) => {
      this.symbols = Object.keys(data.valueOf().symbols)
      console.log(this.symbols);});

    return res;
  }

  getConvert(from:string, to:string, amount:number) {
    const options = {
      method: 'GET',
      url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/convert',
      params: {amount: amount, to: to, from: from},
      headers: {
        'X-RapidAPI-Key': '795679bb1emshda08239ff6d6e14p1705a0jsn1be511a66ae9',
        'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com'
      }
    };

    let res: any = this.http.get(options.url, options).subscribe(data => {
      this.convert = data;
      console.log(this.convert);
    });
    return res;
  }

}
