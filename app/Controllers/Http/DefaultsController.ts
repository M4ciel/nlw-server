import { ResponseContract } from '@ioc:Adonis/Core/Response'
import HttpStatusCode from 'App/Enum/HttpStatusCode.enum'

export default class DefaultsController {
    public responseJson(
        response: ResponseContract,
        status: number,
        message: keyof typeof HttpStatusCode,
        data: any
    ): void {
        return response.status(status).json({
            code: status,
            message: message,
            data: data,
        })
    }
}
