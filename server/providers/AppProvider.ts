import Validator from 'validatorjs'
import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
    constructor(protected app: ApplicationContract) {}

    public register() {
        // Register your own bindings
    }

    public async boot() {
        // IoC container is ready
        const Response = this.app.container.use('Adonis/Core/Response')
        Response.macro('json', function (data) {
            this.status(200).send({ status: true, data })
        })

        Response.macro('notFound', function (errors) {
            this.status(404).send({ status: false, errors })
        })

        Response.macro('badRequest', function (errors) {
            this.status(400).send({ status: false, errors })
        })

        Response.macro('unauthorized', function (errors) {
            this.status(401).send({ status: false, errors })
        })

        Response.macro('notAcceptable', function (errors) {
            this.status(406).send({ status: false, errors })
        })

        Response.macro('created', function (data = {}) {
            this.status(201).send({ status: true, data })
        })

        Response.macro('noContent', function (data = {}) {
            this.status(204).send({ status: true, data })
        })

        Response.macro('forbidden', function (data = {}) {
            this.status(403).send({ status: false, data })
        })
        Response.macro('internalServerError', function (data = {}) {
            this.status(500).send({ status: false, data })
        })

        const Route = this.app.container.use('Adonis/Core/Route')

        const that = this
        Route.Route.macro('validate', function (FormRequest) {
            this.middleware(async (ctx, next) => {
                const FormClass = new FormRequest()
                const rules = FormClass.rules(ctx)
                const customMessages = FormClass.customMessages(ctx)

                const errors: any = that.validate(ctx, rules, customMessages)
                if (Object.keys(errors).length) {
                    const validationErrors = {}
                    for (let key in errors.errors) {
                        validationErrors[key] = errors.errors[key].pop()
                    }

                    return ctx.response.notAcceptable({ errors: validationErrors })
                }

                await next()
            })

            return this
        })
    }

    public async ready() {}

    public async shutdown() {
        // Cleanup, since app is going down
    }

    public validate(ctx, rules, customMessages) {
        const validation = new Validator(ctx.request.all(), rules, customMessages)

        if (validation.fails()) {
            return validation.errors
        }

        const params = ctx.request.all()
        const validatedData = {}
        const validatedKeys = Object.keys(params)
        for (let key in params) {
            if (validatedKeys.indexOf(key) !== -1) {
                validatedData[key] = params[key]
            }
        }

        ctx.data = validatedData

        return []
    }
}
