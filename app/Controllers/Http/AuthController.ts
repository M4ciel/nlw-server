// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import DefaultsController from './DefaultsController'

export default class AuthController extends DefaultsController {
    public async login() {
        return true
    }
}
