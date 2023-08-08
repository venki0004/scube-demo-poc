import Employee from "App/Models/Employee"
import { each } from "lodash"
const Validator = require('validatorjs')

export default class EmployeeController {
     /**
  * USERS LIST
  * @param request
  * @param response
  */
     public async index({ request, response }) {
        try {
            const list = await Employee.listing(request)
            const [total_list] = await Employee.query()
                .whereNull('deleted_at')
                .count('* as total')
            return response.send({
                status: true,
                data: list,
                total_list: total_list.$extras['total'],
            })
        } catch (exception) {
            return response.internalServerError({ message: exception.message })
        }
    }

    /**
    * @param request
    * @param response
    */
    public async show({ request, response }) {
        try {
            const { employee } = request
            return response.json(employee)
        } catch (exception) {
            return response.internalServerError({ message: exception.message })
        }
    }


    /**
 * @param request
 * @param response
 */
    public async store(ctx) {
        return this.save(ctx)
    }

    /**
   * USER UPDATE
   * @param ctx
   */
    public async update(ctx) {
        const { employee } = ctx.request
        return this.save(ctx, employee)
    }

    public async save({ request, response }, record: any = null) {
        try {

            const data = request.only([
                'first_name',
                'last_name',
                'email',
                'phone',
                'designation',
                'team',
                'group',
            ])

            const rules: any = {
                first_name: 'required|max:50|string',
                last_name: 'required|max:150|string',
                designation: 'required|max:200|string',
                email: 'required|email|max:225',
                team: 'required|max:100',
                group: 'required'
            }

            let body = request.body()

            const validation = new Validator(body, rules)

           

            const existingUserByEmail = await Employee.query()
                .where('email', data.email)
                .whereNull('deleted_at')
                .first()


            let user: any = record
            let tempPassword = ''
            if (record === null) {
                user = new Employee()
            }

            if (existingUserByEmail && existingUserByEmail.ID !== user.ID) {
                if (existingUserByEmail.EMAIL.toLowerCase() === data.email.toLowerCase()) {
                    return response.badRequest({ message: 'Employee already exists for given email address.' })
                }
            }

            if(data.group) {
                data.group = data.group.split(',')
            }

            each(data, (value, key) => {
                user[key] = value
            })

            await user.save()
            return response.json({ message: `User ${record ? 'Updated' : 'Created'} Successfully` })
        } catch (exception) {
            return response.internalServerError({ message: exception.message })
        }
    }
}
