import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import moment from 'moment'

export default class Employee extends BaseModel {
    @column({ isPrimary: true })
    public ID: number

    @column()
    public  F_NAME: string

    @column()
    public L_NAME: string

    @column()
    public  EMP_ID: string

    @column()
    public EMAIL: string

    @column()
    public CARD_NO: string
   
    @column()
    public ACCESS_LEVEL: string

    @column()
    public BADGE_TYPE: string

    @column()
    public COMPANY: string

    @column()
    public CARD_TYPE: string

    @column()
    public CARD_STATUS: string

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime


    static listing(request) {
        const {
            page = 1,
            search_key = '',
            status = '',
            start_date = '',
            end_date = '',
        } = request.qs()
        const limit = 10
        let query = this.query()

        if (start_date && end_date) {
            let start = moment(start_date).startOf('day').format('YYYY-MM-DD HH:mm:ss')
            let end = moment(end_date).endOf('day').format('YYYY-MM-DD HH:mm:ss')
            query.where('created_at', '>=', start)
            query.where('created_at', '<=', end)
        }

        if (status) {
            query = query.where('CARD_STATUS', status)
        }
        if (search_key) {
            query = query.where((sub_query) => {
                sub_query
                    .orWhere('F_NAME', 'LIKE', `%${search_key}%`)
                    .orWhere('L_NAME', 'LIKE', `%${search_key}%`)
                    .orWhere('ID', 'LIKE', `%${search_key}%`)
            })
        }

        return query
            .select(
                'ID',
                'F_NAME',
                'L_NAME',
                'EMP_ID',
                'CARD_NO',
                'ACCESS_LEVEL',
                'BADGE_TYPE',
                'COMPANY',
                'CARD_TYPE',
                'CARD_STATUS',
                'EMAIL'
            )
            .orderBy('ID', 'desc')
            .paginate(page, limit)
    }
}
