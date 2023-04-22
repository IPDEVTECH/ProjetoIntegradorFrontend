<template>
    <v-app id="inspire">
        <v-content style="background-color: floralwhite;">
            <v-container>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark style="background-color: darkred;">
                                <v-toolbar-title>Login Administrativo</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form ref="form">
                                    <v-text-field
                                        v-model="credential.login"
                                        :rules="rules.login"
                                        outlined
                                        id="login"
                                        name="login"
                                        label="Login"
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
                                       :loading="loading"
                                       :disabled="loading"
                                       v-on:click="authentication">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator'
import {Credential} from '@/common/TypeHelper'
import authService from "@/services/AuthService";

@Component({
    components: {},
})
export default class LoginView extends Vue {
    @Ref() form!: any

    public loading = false
    public lazy = false

    public credential: Credential = {
        login: '',
        password: '',
    }

    public rules: any = {
        login: [
            (value: string) => !!value || 'Preencha o login',
            (value: string) => /.+@.+\..+/.test(value) || 'Login inválido',
        ],
        password: [
            (value: string) => !!value || 'Preencha a Senha',
        ],
    }

    public authentication(): void {
        if (!this.form.validate) {
            return
        }

        this.lazy = true
        this.loading = true

        this.login(this.credential)
    }

    public login(credential: Credential): void {
        if (credential.login === 'teste@teste.com' && credential.password === '1234Agb') {
            return
        }
    }

}

</script>

<style scoped>
body {
    overflow: hidden;
    height: 100vh;
}
</style>