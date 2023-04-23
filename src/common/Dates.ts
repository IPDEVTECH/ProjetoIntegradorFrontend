import moment from 'moment'
import {Moment} from 'moment/moment'

export default class Dates {
    public static readonly SUNDAY: number = 0
    public static readonly SATURDAY: number = 6

    public static readonly WEEKEND_DAYS: number[] = [
        Dates.SUNDAY,
        Dates.SATURDAY,
    ]

    public static now(): Moment {
        return new Dates().moment
    }

    public static nowDt(): Moment {
        const now = this.now().format('Y-MM-DD')
        return this.createFrom(now)
    }

    public static nowBr(): string {
        return new Dates().moment.format('L')
    }

    public static isWeekendDay(date: Moment): boolean {
        const weekDay = date.weekday()
        return this.WEEKEND_DAYS.indexOf(weekDay) >= 0
    }

    public static ageFromNow(date: string): number {
        return (moment(date).isValid()) ? moment().diff(moment(date), 'years') : 0
    }

    public static daysFromNow(date: string): number {
        return (moment(date).isValid()) ? moment().diff(moment(date), 'days') : 0
    }

    public static createFrom(date: string): Moment {
        const dtMoment = moment(date)
        dtMoment.locale('pt-br')

        return dtMoment
    }

    public static createFromDtBr(date: string): Moment {
        const dtMoment = moment(date.split('/').reverse().join('-'))
        dtMoment.locale('pt-br')

        return dtMoment
    }

    private moment: Moment

    constructor() {
        this.moment = moment()
        this.moment.locale('pt-br')
    }
}

