import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as _moment from 'moment';

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
  
  formData: FormGroup;

  initialDate = new Date();
  formattedDate1 = _moment(this.initialDate).format('YYYY-MM-DD');
  formattedDate2 = _moment(this.initialDate).format('DD-MMM-YYYY');

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formData = this._formBuilder.group({
      date: [new Date]
    });
  }

  onChange(event) {
    this.initialDate = event.value;
    this.formattedDate1 = _moment(event.value).format('YYYY-MM-DD');
    this.formattedDate2 = _moment(event.value).format('DD-MMM-YYYY');
  }

}
