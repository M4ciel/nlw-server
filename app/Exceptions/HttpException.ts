import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Exception } from '@adonisjs/core/build/standalone'
import HttpStatusCode from 'App/Enum/HttpStatusCode.enum'

export default class HttpException extends Exception {
    protected statusCode: keyof typeof HttpStatusCode

    constructor(message: string, statusCode: keyof typeof HttpStatusCode) {
        super(message, HttpStatusCode[statusCode])
        this.statusCode = statusCode
    }

    public async handle(error: this, { response }: HttpContextContract) {
        return response.status(error.status).json({
            code: this.statusCode,
            error: this.message,
        })
    }
}
