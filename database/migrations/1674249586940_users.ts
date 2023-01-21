import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
    protected tableName = 'users'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('name', 50).notNullable()
            table.string('email', 255).notNullable().unique()
            table.string('password', 180).notNullable()
            table.string('remember_me_token').nullable()
            table.datetime('birth_date').notNullable()
            table.enum('type', ['ADMIN', 'NORMAL']).defaultTo('NORMAL').notNullable()
            table.timestamp('created_at', { useTz: true }).notNullable()
            table.timestamp('updated_at', { useTz: true }).notNullable()
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
