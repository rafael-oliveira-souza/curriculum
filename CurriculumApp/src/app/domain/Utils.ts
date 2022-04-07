import * as moment from 'moment/moment';

export class DateUtils {

    static diffDate(date1: Date, date2: Date, format: 'seconds' | 'minutes' | 'days' | 'years' | undefined): number {
        if (format == undefined) {
            return moment(date1).diff(date2);
        }
        return moment(date1).diff(date2, format);
    }

    static periodInString(date1: Date, date2: Date): string {
        let st1 = date1 ? moment(date1).format("MM/yyyy") : '';
        let st2 = date2 ? moment(date2).format("MM/yyyy") : 'Vigente';

        return `${st1} - ${st2}`;
    }
}