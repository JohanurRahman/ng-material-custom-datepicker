import { NativeDateAdapter } from '@angular/material';


export class AppDateAdapter extends NativeDateAdapter {

  format(date: Date, displayFormat: string): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth();
      // const month = date.getMonth() + 1; /* When showing numeric add + 1*/
      const year = date.getFullYear();
      return this._to2digit(day) + '-' + this._toString(month) + '-' + year;
    } else if (displayFormat === 'inputMonth') {
      const month = date.getMonth();
      const year = date.getFullYear();
      return this._toString(month) + ' ' + year;
    }
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }

  private _toString(n) {
    const month = ['Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return month[n];
  }

}

export const APP_DATE_FORMATS = {
  parse: {
    dateInput: 'LL'
  },
  display: {
    dateInput: 'input',
    monthYearLabel: 'inputMonth'
  }
}
