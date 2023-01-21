import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginValidator {
    constructor(protected ctx: HttpContextContract) {}

    public schema = schema.create({
        email: schema.string([rules.email(), rules.maxLength(255)]),
        password: schema.string([rules.minLength(8), rules.maxLength(180)]),
    })

    public messages: CustomMessages = {}
}
