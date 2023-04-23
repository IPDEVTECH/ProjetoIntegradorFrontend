import {getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import store from '@/store'
import {AuthData, ShowMessageMutation, SnackbarMessage} from "@/store/common/types";
import authService from "@/services/AuthService";

@Module({
    name: 'commonModule',
    namespaced: true,
    store,
    dynamic: true,
})
class Common extends VuexModule {
    message: SnackbarMessage | null = null
    auth: AuthData | null = null

    @Mutation
    showMessage(showMessageMutation: ShowMessageMutation) {
        this.message = {
            ...{
                timeout: 5000,
                type: 'default',
                show: true,
            }, ...showMessageMutation,
        }
    }

    @Mutation
    closeMessage() {
        this.message = null
    }

    @Mutation
    setAuth(authData: AuthData | null) {
        this.auth = authData
        authService.saveAuthData()
    }
}

export const CommonModule = getModule(Common)