import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpStatusCode from 'App/Enum/HttpStatusCode.enum'
import HttpException from 'App/Exceptions/HttpException'
import Habit from 'App/Models/Habit'
import HabitsService from 'App/Services/HabitsService'
import DeleteValidator from 'App/Validators/Habit/DeleteValidator'
import StoreValidator from 'App/Validators/Habit/StoreValidator'

import DefaultsController from './DefaultsController'

export default class HabitsController extends DefaultsController {
    private habitsService = new HabitsService()

    public async list({ auth, response }: HttpContextContract) {
        if (!auth.user) {
            throw new HttpException('Invalid credentials', 'UNAUTHORIZED')
        }
        const habits: Habit[] = await this.habitsService.list(auth.user)
        return this.responseJson(response, HttpStatusCode.OK, 'OK', habits)
    }

    public async store({ auth, request, response }: HttpContextContract) {
        if (!auth.user) {
            throw new HttpException('Invalid credentials', 'UNAUTHORIZED')
        }

        const habit: Habit.Create = await request.validate(StoreValidator)

        const newHabit: Habit.Return[] = await this.habitsService.store(auth.user, habit)

        return this.responseJson(response, HttpStatusCode.CREATED, 'CREATED', newHabit)
    }

    public async delete({ auth, request, response }: HttpContextContract) {
        if (!auth.user) {
            throw new HttpException('Invalid credentials', 'UNAUTHORIZED')
        }

        const {
            params: { id },
        } = await request.validate(DeleteValidator)

        await this.habitsService.delete(id)

        return this.responseJson(response, HttpStatusCode.OK, 'OK', `Deleted habit id: ${id}`)
    }
}
