import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(name: string, qtd: number): any {
    let resp: string = "";

    if (name) {
      const words = name.split(' ');

      words.forEach(letter =>
        resp += (letter.substring(0, 1).toUpperCase()));

      if (qtd && qtd > 0) {
        resp = resp.substring(0, qtd);
      }
    }

    

    return resp;
  }

}
