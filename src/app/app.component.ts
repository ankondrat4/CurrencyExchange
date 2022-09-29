import { Component } from '@angular/core';
import {ITEMS} from "./Data";
import {getRate} from "./Data";
import {HttpClient} from "@angular/common/http";
import {ResultAPI} from "./resultAPI";
import {FixerCurrencyAPIService} from "./fixer-currency-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CurrencyExchange';
  result: number = -1;
  val1_input: number = 0;
  kurs: number = 0;
  from: string="USD";
  to: string="UAH";

  setFrom(from:string): void {
    this.from = from;
    this.kurs = getRate(this.from, this.to);
  }

  setTo(to:string): void {
    this.to = to;
    this.kurs = getRate(this.from, this.to);
  }

  onClick(): void {
    let tmp:ResultAPI = this.rezAPI.getConvert(this.from, this.to, this.val1_input);
    this.kurs = tmp.rate;
    this.result = tmp.result;
  }

  testAPI(): void {
    let tmp:ResultAPI = this.rezAPI.getConvert(this.from, this.to, this.val1_input);
    this.kurs = tmp.rate;
    this.result = tmp.result;
  }

  constructor(public rezAPI:FixerCurrencyAPIService) { }
}
