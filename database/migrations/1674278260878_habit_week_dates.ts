import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
    protected tableName = 'habit_week_dates'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id')
            table.integer('id_habit').unsigned().notNullable().references('id').inTable('habits')
            table.integer('week_day').notNullable()
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
            table.unique(['id_habit', 'week_day'])
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
