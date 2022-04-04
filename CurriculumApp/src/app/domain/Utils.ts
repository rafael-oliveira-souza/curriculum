import * as moment from 'moment/moment';

export class DateUtils{

    static diffDate(date1: Date, date2: Date, format: 'seconds' | 'minutes' | 'days' | 'years' | undefined): number{
        if(format == undefined){
            return moment(date1).diff(date2);
        }
       return moment(date1).diff(date2, format);
    }
}