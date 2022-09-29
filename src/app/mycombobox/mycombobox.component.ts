import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ITEMS } from '../Data';
import {FixerCurrencyAPIService} from "../fixer-currency-api.service";

@Component({
  selector: 'app-mycombobox',
  templateUrl: './mycombobox.component.html',
  styleUrls: ['./mycombobox.component.css']
})
export class MycomboboxComponent implements OnInit {

  inputItem: string = "";
  itemList: string[] = this.rezAPI.symbols;
  selectedIndex = -1;
  @Input() name: string="";

  @Input() list: string[] = [];

  @Output() onItemSelected = new EventEmitter<string>();
  listHide: boolean = true;

  constructor(public rezAPI:FixerCurrencyAPIService) { }

  ngOnInit(): void {
    this.rezAPI.getSymbols();
  }

  selectItem(index:number): void {
    if (this.rezAPI.symbols) {
      this.inputItem = this.rezAPI.symbols[index];
      this.selectedIndex = index;
      this.listHide = true;

      this.onItemSelected.emit(this.rezAPI.symbols[index]);
    }
  }

  onChange(): void {
    if (this.rezAPI.symbols) {
      let text = this.rezAPI.symbols.indexOf(this.inputItem.toUpperCase());
      if (text)
        this.selectItem(text);
    }
  }

}
