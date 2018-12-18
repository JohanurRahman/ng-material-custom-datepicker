import { NativeDateAdapter} from "@angular/material";


export class AppDateAdapter extends NativeDateAdapter {

  format(date: Date, displayFormat: string): string {
    if (displayFormat == "input") {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
    }
    else if (displayFormat == "inputMonth") {
      let month = date.getMonth();
      let year = date.getFullYear();
      return this._toString(month) + ' ' + year;
    }
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }

  private _toString(n: number) {
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return month[n];
  }

}

export const APP_DATE_FORMATS =
{
  parse: {
    dateInput: 'LL'
  },
  display: {
    dateInput: 'input',
    monthYearLabel: 'inputMonth'
  }
}
