import { Pipe, PipeTransform } from '@angular/core';
import { DateUtils } from '../domain/Utils';

@Pipe({
  name: 'years'
})
export class YearsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let anos = DateUtils.diffDate(new Date(), value, 'years');

    if(anos){
      return anos  + ' Anos';
    }

    return "";
  }

}
