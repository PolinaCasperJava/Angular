import { Component, OnInit } from '@angular/core';
import {CUSTOMERS} from '../customers';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.styl']
})
export class CustomerListComponent implements OnInit {

  customers = CUSTOMERS;

  constructor() { }

  ngOnInit(): void {
  }

}
