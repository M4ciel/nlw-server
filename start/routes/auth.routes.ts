import Route from '@ioc:Adonis/Core/Route'
import AuthController from 'App/Controllers/Http/AuthController'

Route.group(() => {
    Route.post('/login', async (ctx) => {
        return new AuthController().login(ctx)
    })

    Route.post('/register', async (ctx) => {
        return new AuthController().register(ctx)
    })
}).prefix('auth')
