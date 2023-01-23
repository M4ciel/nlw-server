import Hash from '@ioc:Adonis/Core/Hash'
import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import User from 'App/Models/User'
import HttpException from 'App/Exceptions/HttpException'

export default class AuthService {
    public async validates({ email, password }, auth: AuthContract) {
        const user: User = await User.findByOrFail('email', email)

        if (!(await Hash.verify(user.password, password))) {
            throw new HttpException('Invalid credentials', 'UNAUTHORIZED')
        }

        return await auth.use('api').generate(user, {
            expiresIn: '3 hours',
        })
    }
}
