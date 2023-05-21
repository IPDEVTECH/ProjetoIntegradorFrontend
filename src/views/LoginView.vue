<template>
    <v-layout align-center justify-center class="mt-5">
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark style="background-color: darkred;">
                    <v-toolbar-title>Login Administrativo</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form ref="form">
                        <v-text-field
                            v-model="credential.email"
                            :rules="rules.email"
                            outlined
                            id="email"
                            name="email"
                            label="E-mail"
                            type="text"
                        ></v-text-field>
                        <v-text-field
                            v-model="credential.password"
                            :rules="rules.password"
                            outlined
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                        ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn dark style="background-color: darkred;"
                           type="submit"
                           :loading="loading"
                           :disabled="loading"
                           v-on:click="authentication">Login
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator'
import {Credential} from '@/common/TypeHelper'
import authService from '@/services/AuthService'
import {CommonModule} from '@/store/common'
import Toast, {POSITION} from 'vue-toastification'
import 'vue-toastification/dist/index.css';

@Component({
    components: {
        Toast
    },
})
export default class LoginView extends Vue {
    @Ref() form!: any

    public loading = false
    public lazy = false

    public credential: Credential = {
        email: '',
        password: '',
    }

    public rules: any = {
        email: [
            (value: string) => !!value || 'Preencha o campo e-mail corretamente',
            (value: string) => /.+@.+\..+/.test(value) || 'E-mail inválido',
        ],
        password: [
            (value: string) => !!value || 'Preencha o campo senha corretamente',
        ],
    }

    public authentication(): void {
        this.lazy = true
        this.loading = true

        if (!this.form.validate) {
            return
        }

        authService.login(this.credential).then((response) => {
            const authData = {
                access_token: response.data.access_token,
                expires_in: response.data.expires_in,
                token_type: response.data.token_type
            }
            CommonModule.setAuth(authData)

            this.$router.push({name: 'about'})
            this.$toast.success('Login realizado com sucesso!', {
                position: POSITION.TOP_RIGHT,
                timeout: 4000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                closeButton: "button",
                icon: true,
                rtl: false
            })
        }).catch((error) => {
            this.$toast.error('Erro login: E-mail ou senha incorretos!', {
                position: POSITION.TOP_RIGHT,
                timeout: 4000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                closeButton: "button",
                icon: true,
                rtl: false
            })
            console.error(error.response.data.error)
        }).finally(() => {
            this.loading = false
        })
    }
}

</script>

<style scoped>
body {
    overflow: hidden;
    height: 100vh;
}
</style>