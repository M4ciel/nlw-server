import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import HabitWeekDate from './HabitWeekDate'
import DateHabit from './DateHabit'

export default class Habit extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public title: string

    @column()
    public idUser: number

    @belongsTo(() => User, {
        foreignKey: 'idUser',
    })
    public user: BelongsTo<typeof User>

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @hasMany(() => HabitWeekDate)
    public habitWeekDate: HasMany<typeof HabitWeekDate>

    @hasMany(() => DateHabit)
    public dateHabit: HasMany<typeof DateHabit>
}
