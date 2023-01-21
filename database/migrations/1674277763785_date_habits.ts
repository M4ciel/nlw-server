import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
    protected tableName = 'date_habits'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id')
            table.integer('id_habit').unsigned().notNullable().references('id').inTable('habits')
            table.integer('id_date').unsigned().notNullable().references('id').inTable('dates')
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
            table.unique(['id_habit', 'id_date'])
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
