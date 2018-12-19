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

  initialDate;
  formattedDate1;
  formattedDate2;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
      this.formData = this._formBuilder.group({
        date: ['']
      })
   }

   onChange(event){
     this.initialDate = event.value;
     this.formattedDate1 = _moment(event.value).format('YYYY-MM-DD');
     this.formattedDate2 = _moment(event.value).format('DD-MMM-YYYY');
   }

}
