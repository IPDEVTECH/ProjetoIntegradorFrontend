<template>
    <v-app>
        <div class="menu-lateral">
            <div class="logo">
                <img src="../../src/assets/logo.png" alt="">
            </div>
            <div class="links">
                <li><a id="dashboard_btn" href="/dashboard"><i class='bx bxs-dashboard'></i></a></li>
                <li><a id="mesas_btn" href="/mesas"><i class='bx bx-table'></i></a></li>
                <li><a id="cardapio_btn" href="/cardapio"><i class='bx bxs-receipt'></i></a></li>
                <li><a><i class='bx bxs-timer'></i></a></li>
            </div>
        </div>

        <div class="menu-superior">
            <div class="notificacao">
                <i class='bx bxs-message-alt-minus'></i>
                <div class="badge">0</div>
            </div>
            <div class="usuario">
                <div class="usuario-foto">
                    <img src="../../src/assets/perfil.png" alt="">
                </div>
                <div class="usuario-name">
                    <h2>Nome</h2>
                    <p>cargo</p>
                </div>
                <div class="usuario-button">
                    <a id="btn-dropdown"><i class='bx bxs-down-arrow'></i></a>
                </div>
            </div>

            <!-- <div class="login_usuario">
                <a href="">Login</a>
            </div> -->
        </div>
    </v-app>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component({
    components: {
        
    },
})
export default class MenuComponent extends Vue {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;700&family=Ubuntu:wght@300;400;700&display=swap');

* {
    margin: 0;
    padding: 0;
}

.v-application p {
    margin-bottom: 0;
}

.menu-lateral {
    position: fixed;
    left: 0;
    top: 0;
    width: 4.5rem;
    height: 100%;
    background-color: #e4eff7;
    text-align: center;
}

.menu-lateral .logo img {
    margin-top: 0.7rem;
    width: 2.5rem;
}

.links {
    margin-top: 5rem;
}

.menu-lateral .links li,
.menu-lateral .links a {
    margin-top: 0.7rem;
    text-decoration: none;
    list-style: none;
    font-size: 1.8rem;
    color: #99b2c5;
}

.menu-lateral .links a:hover {
    color: #1a88dd;
}


/* MENU SUPERIOR */
.menu-superior {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 4.5rem;
    height: 4rem;
    background-color: #e4eff7;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 4rem 0 4rem;
}

.menu-superior .notificacao {
    margin-right: 1rem;
    font-size: 1.5rem;
}

.notificacao {
    position: relative;
    display: inline-block;
}

.badge {
    position: absolute;
    top: -4px;
    right: -6px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 0px 5px;
    font-size: 12px;
}

.usuario-foto img {
    width: 2.5rem;
}

.usuario {
    display: flex;
    align-items: center;
}

.usuario .usuario-name {
    padding: 0 0 0 1rem;
    font-family: "Ubuntu";
    font-size: 0.8rem;
    color: #1d1d1d;
}

.usuario-name h2 {
    height: 20px;
}

.usuario .usuario-button i {
    padding: 0 0 0 1rem;
    font-size: 0.8rem;
    color: #1d1d1d;
}
.login_usuario a{
    padding: 0.5rem 2rem 0.5rem 2rem;
    background-color: #1a88dd;
    border-radius: 1rem;
    color: white;
    text-decoration: none;
}
.login_usuario a:hover{
    background-color: #084472;
    color: white;
}
</style>