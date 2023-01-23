import Habit from 'App/Models/Habit'
import User from 'App/Models/User'

export default class HabitsRepository {
    public async findByUserId(user: User): Promise<Habit[]> {
        return await Habit.query().where('id_user', user.id)
    }
}
