import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpStatusCode from 'App/Enum/HttpStatusCode.enum'
import User from 'App/Models/User'
import AuthService from 'App/Services/AuthService'
import LoginValidator from 'App/Validators/Auth/LoginValidator'
import RegisterValidator from 'App/Validators/Auth/RegisterValidator'

import DefaultsController from './DefaultsController'

export default class AuthController extends DefaultsController {
    private authService = new AuthService()
    public async login({ request, auth, response }: HttpContextContract) {
        const userData = await request.validate(LoginValidator)

        try {
            return this.responseJson(response, HttpStatusCode.ACCEPTED, 'ACCEPTED', {
                token: await this.authService.validates(userData, auth),
            })
        } catch (error) {
            return this.responseJson(response, HttpStatusCode.UNAUTHORIZED, 'UNAUTHORIZED', error)
        }
    }

    public async register({ request, response }: HttpContextContract) {
        const { name, email, password, birthDate } = await request.validate(RegisterValidator)

        const user: User = await User.create({
            name: name,
            email: email,
            password: password,
            birthDate: birthDate,
        })
        return this.responseJson(response, HttpStatusCode.CREATED, 'CREATED', user)
    }
}
