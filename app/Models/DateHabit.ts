import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Habit from './Habit'

export default class DateHabit extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public id_habit: number

    @column()
    public id_date

    @belongsTo(() => Habit, {
        foreignKey: 'id_habit',
    })
    public habit: BelongsTo<typeof Habit>

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
