import http, {HttpRequestPromise} from '@/common/HttpRequest'
import {CommonModule} from '@/store/common'
import * as Cookies from 'js-cookie'
import {AuthDataResponse} from '@/store/common/types'
import {Credential} from '@/common/TypeHelper'

class AuthService {
    public saveAuthData(): void {
        Cookies.set('authData', JSON.stringify(CommonModule.auth), {expires: 3})
    }

    public login(credential: Credential): HttpRequestPromise<AuthDataResponse> {
        return http.post('auth/login-area-administrativa', credential)
    }
}

const authService = new AuthService()
export default authService
