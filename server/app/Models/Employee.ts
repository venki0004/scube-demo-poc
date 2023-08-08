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
            designation = '',
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

        if (status != '') {
            query = query.where('is_active', '=', status == 'true' ? 1 : 0)
        }

        if (designation) {
            query = query.where('designation', '=', designation)
        }

        if (search_key) {
            query = query.where((sub_query) => {
                sub_query
                    .orWhere('first_name', 'LIKE', `%${search_key}%`)
                    .orWhere('last_name', 'LIKE', `%${search_key}%`)
                    .orWhere('id', 'LIKE', `%${search_key}%`)
            })
        }

        return query
            .whereNull('deleted_at')
            .select(
                'id',
                'first_name',
                'last_name',
                'image_url',
                'designation',
                'team',
                'group',
                'email',
                'is_active',
                'created_at',
            )
            .orderBy('id', 'desc')
            .paginate(page, limit)
    }
}
