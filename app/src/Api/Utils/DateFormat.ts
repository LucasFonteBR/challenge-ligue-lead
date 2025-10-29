import moment from 'moment';

export default class DateFormat {
  public static dateToStr(date: Date): string {
    return moment(date).format('YYYY-MM-DD');
  }

  public static timestamp(date: Date): string {
    return moment(date).format('YYYY-MM-DD HH:mm:ss.SSS');
  }

  public static timestampNumber(date: Date): string {
    return moment(date).format('YYYYMMDDHHmmssSSS');
  }

  public static dateToStrBR(date: Date): string {
    return moment(date).format('DD/MM/YYYY');
  }

  public static dateTimeToStr(date: Date): string {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }

  public static isDateExpired(expiresDateTime: string): boolean {
    return new Date() > new Date(expiresDateTime);
  }

  public static strToDateBR(date?: string): Date {
    if (!date) {
      date = this.dateToStrBR(new Date());
    }
    return moment(date).toDate();
  }

  public static strToDateTime(date?: string): Date {
    if (!date || date === '') {
      date = this.dateTimeToStr(new Date());
    }
    return moment(date).toDate();
  }
}
