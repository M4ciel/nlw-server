import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
    constructor(protected ctx: HttpContextContract) {}

    public schema = schema.create({
        title: schema.string([rules.maxLength(255)]),
        weekDate: schema.array().members(schema.number([rules.range(0, 6)])),
    })

    public messages: CustomMessages = {}
}
