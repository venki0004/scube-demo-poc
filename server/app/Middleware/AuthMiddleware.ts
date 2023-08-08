import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthMiddleware {
    public async handle(
        { auth, response }: HttpContextContract,
        next: () => Promise<void>,
        guards?: any[]
    ) {
        try {
            await auth.use(guards?.length ? guards[0] : auth.name).authenticate()
        } catch (exception) {
            return response.unauthorized({ message: 'Token not found' })
        }

        await next()
    }
}
