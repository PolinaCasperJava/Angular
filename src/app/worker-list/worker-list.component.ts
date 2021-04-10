import { Component, OnInit } from '@angular/core';
import {WORKERS} from '../workers';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.styl']
})
export class WorkerListComponent implements OnInit {

  workers = WORKERS;

  constructor() { }

  ngOnInit(): void {
  }

}
