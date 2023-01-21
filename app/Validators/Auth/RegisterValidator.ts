import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
    constructor(protected ctx: HttpContextContract) {}

    public schema = schema.create({
        name: schema.string([rules.maxLength(50)]),
        email: schema.string([rules.email(), rules.maxLength(255)]),
        password: schema.string([rules.minLength(8), rules.maxLength(180)]),
        birthDate: schema.date({ format: 'yyyy-MM-dd' }),
    })

    public messages: CustomMessages = {}
}
