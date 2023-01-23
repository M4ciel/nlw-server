import Route from '@ioc:Adonis/Core/Route'
import HabitsController from 'App/Controllers/Http/HabitsController'

Route.group(() => {
    Route.get('/list', async (ctx) => {
        return new HabitsController().list(ctx)
    })

    Route.post('/store', async (ctx) => {
        return new HabitsController().store(ctx)
    })

    Route.delete('/delete/:id', async (ctx) => {
        return new HabitsController().delete(ctx)
    })
})
    .middleware('auth')
    .prefix('habits')
