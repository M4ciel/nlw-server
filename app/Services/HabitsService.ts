import HttpException from 'App/Exceptions/HttpException'
import Habit from 'App/Models/Habit'
import HabitWeekDate from 'App/Models/HabitWeekDate'
import User from 'App/Models/User'
import HabitsRepository from 'App/Repositories/HabitsRepository'

export default class HabitsService {
    private habitsRepository = new HabitsRepository()

    public async list(user: User): Promise<Habit[]> {
        try {
            const habits: Habit[] = await this.habitsRepository.findByUserId(user)

            return habits
        } catch (error) {
            throw new HttpException(error, 'BAD_REQUEST')
        }
    }

    public async store(user: User, { title, weekDate }: Habit.Create): Promise<Habit.Return[]> {
        try {
            const habits: Habit.Return[] = []
            for (const habitWeekDate of weekDate) {
                const newHabit = await HabitWeekDate.create({
                    id_habit: (
                        await Habit.create({
                            idUser: user.id,
                            title: title,
                        })
                    ).id,
                    week_day: habitWeekDate,
                })

                habits.push({
                    WeekDate: {
                        id: newHabit.id,
                        habit: {
                            id: newHabit.id_habit,
                            title: title,
                        },
                        weekDate: newHabit.week_day,
                    },
                })
            }

            return habits
        } catch (error) {
            throw new HttpException(error, 'BAD_REQUEST')
        }
    }

    public async delete(id: number): Promise<void> {
        try {
            const habit: Habit = await Habit.findOrFail(id)
            return await habit.delete()
        } catch (error) {
            throw new HttpException(error, 'BAD_REQUEST')
        }
    }
}
