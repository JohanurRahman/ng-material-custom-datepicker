import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';

@Component({
  selector: 'app-material-custom-datepicker',
  templateUrl: './material-custom-datepicker.component.html',
  styleUrls: ['./material-custom-datepicker.component.css'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class MaterialCustomDatepickerComponent implements OnInit {


  constructor() { }

  ngOnInit() { }


}
