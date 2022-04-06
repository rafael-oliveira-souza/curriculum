import * as moment from 'moment/moment';

export class DateUtils{

    static diffDate(date1: Date, date2: Date, format: 'seconds' | 'minutes' | 'days' | 'years' | undefined): number{
        if(format == undefined){
            return moment(date1).diff(date2);
        }
       return moment(date1).diff(date2, format);
    }
    
    static periodInString(date1: Date, date2: Date): string{
       let st1 = moment(date1).format("DD/MM/yyyy");
       let st2 = moment(date2).format("DD/MM/yyyy");

       return `${st1} - ${st2}`;
    }
}