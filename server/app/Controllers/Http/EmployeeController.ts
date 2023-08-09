import Employee from "App/models/Employee"
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
            return response.json(employee.$extras)
        } catch (exception) {
            return response.internalServerError({ message: exception.message })
        }
    }


    /**
 * @param request
 * @param response
 */
    public async store({ request, response }) {
        try {
            const data = request.only([
                'f_name',
                'l_name',
                'email',
                'card_type',
                'card_status',
                'card_no',
                'badge_type',
                'access_level',
                'company',
                'emp_id'
            ])

            const rules: any = {
                f_name: 'required|max:50|string',
                l_name: 'required|max:150|string',
                email: 'required|email|max:225',
                card_type: 'required',
                card_status: 'required',
                card_no: 'required',
                company: 'required',
                badge_type: 'required',
                access_level: 'required',
                emp_id: 'required'
            }

            let body = request.body()

            const validation = new Validator(body, rules)

            if (validation.fails()) {
                return response.badRequest(validation.errors.errors)
            }

            const existingUserByEmail = await Employee.query()
                .where('EMAIL', data.email)
                .first()
            const existingUserEmpId = await Employee.query()
                .where('EMP_ID', data.emp_id)
                .first()

            const existingUserCardId = await Employee.query()
                .where('CARD_NO', data.card_no)
                .first()
            let employee: any = new Employee()

            if (existingUserByEmail) {
                if (existingUserByEmail.$extras.EMAIL.toLowerCase() === data.email.toLowerCase()) {
                    return response.badRequest({ message: 'Employee already exists for given email address.' })
                }
            }

            if (existingUserEmpId) {
                if (existingUserEmpId.$extras.EMP_ID.toLowerCase() === data.emp_id.toLowerCase()) {
                    return response.badRequest({ message: 'Emp Id is Already Assigned to another Employee.' })
                }
            }

            if (existingUserCardId) {
                if (existingUserCardId.$extras.CARD_NO.toLowerCase() === data.card_no.toLowerCase()) {
                    return response.badRequest({ message: 'Card No is Already Assigned to another Employee.' })
                }
            }


            each(data, (value, key) => {
                employee[key.toUpperCase()] = value
            })

            await employee.save()
            return response.json({ message: `Employee Created Successfully` })
        } catch (exception) {
            return response.internalServerError({ message: exception.message })
        }
    }

    /**
   * USER UPDATE
   * @param ctx
   */
    public async update({ request, response }) {
        const { employee } = request
        try {

            const data = request.only([
                'f_name',
                'l_name',
                'email',
                'card_type',
                'card_status',
                'card_no',
                'badge_type',
                'access_level',
                'company',
                'emp_id'
            ])

            const rules: any = {
                f_name: 'required|max:50|string',
                l_name: 'required|max:150|string',
                email: 'required|email|max:225',
                card_type: 'required',
                card_status: 'required',
                card_no: 'required',
                company: 'required',
                badge_type: 'required',
                access_level: 'required',
                emp_id: 'required'
            }

            let body = request.body()

            const validation = new Validator(body, rules)

            if (validation.fails()) {
                return response.badRequest(validation.errors.errors)
            }

            const existingUserByEmail = await Employee.query()
                .where('EMAIL', data.email)
                .whereNot('ID', employee.$extras.ID)
                .first()
            const existingUserEmpId = await Employee.query()
                .where('EMP_ID', data.emp_id)
                .whereNot('ID', employee.$extras.ID)
                .first()

            const existingUserCardId = await Employee.query()
                .where('CARD_NO', data.card_no)
                .whereNot('ID', employee.$extras.ID)
                .first()

            if (existingUserByEmail) {
                if (existingUserByEmail.$extras.EMAIL.toLowerCase() === data.email.toLowerCase()) {
                    return response.badRequest({ message: 'Employee already exists for given email address.' })
                }
            }

            if (existingUserEmpId) {
                if (existingUserEmpId.$extras.EMP_ID.toLowerCase() === data.emp_id.toLowerCase()) {
                    return response.badRequest({ message: 'Emp Id is Already Assigned to another Employee.' })
                }
            }

            if (existingUserCardId) {
                if (existingUserCardId.$extras.CARD_NO.toLowerCase() === data.card_no.toLowerCase()) {
                    return response.badRequest({ message: 'Card No is Already Assigned to another Employee.' })
                }
            }


            await Employee.query().where('id', employee.$extras.ID).update(data)
            return response.json({ message: `Employee Updated Successfully` })
        } catch (exception) {
            return response.internalServerError({ message: exception.message })
        }
    }



    /**
    * Employee ENABLE AND DISABLE
    * @param request
    * @param response
    */
    public async updateStatus({ request, response }) {
        try {
            const { status } = request.body()
            
            const employee = request['employee']
            await Employee.query().where('id', employee.$extras.ID).update({
                CARD_STATUS: status == true ? 'Active' : 'Disabled'
            })
            return response.json({ message: 'Status Update Successfully' })
        } catch (exception) {
            console.log(exception)
            return response.internalServerError({ message: exception.message })
        }
    }
}
