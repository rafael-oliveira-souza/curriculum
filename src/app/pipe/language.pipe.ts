import { Pipe, PipeTransform } from '@angular/core';
import { SystemService } from '../service/system.service';
import { Constants } from '../domain/Contants';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: any): any {
    const language =  localStorage.getItem(SystemService.LANGUAGE_CURRICULUM);
    return  Constants.getLabels(language)[value];
  }

}
