import { Pipe, PipeTransform } from '@angular/core';
import { DateUtils } from '../domain/Utils';

@Pipe({
  name: 'years'
})
export class YearsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return DateUtils.diffDate(new Date(), value, 'years') + ' Anos';
  }

}
