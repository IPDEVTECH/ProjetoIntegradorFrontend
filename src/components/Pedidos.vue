<template>
    <v-app>

        <div class="pedidos" id="pedidos_id">
            <h1>Pedidos</h1>

            <div v-for="pedido in pedidos" :key="pedido.id" class="comanda_pedido">
                <div class="comanda_info">
                    <div class="comanda_info_num">
                        <div class="info_num">
                            <p>{{ pedido.numero }}</p>
                        </div>
                        <div class="info_comanda">
                            <p>Comanda</p>
                        </div>
                        <div class="info_num_pedido">
                            <p>Pedido {{ pedido.pedido }}</p>
                        </div>
                    </div>
                    <div class="mesa_comanda">
                        <h4>Mesa - {{ pedido.mesa }}</h4>
                    </div>
                </div>
                <div class="comanda_obs">
                    <p>- {{pedido.item}}</p>
                </div>
                <div class="comanda_status">
                    <div class="status_main">
                        <div class="status_main_01">
                            <div class="status_icone">
                                <i class='bx bx-package'></i>
                            </div>
                            <div class="status_stat">
                                <p>({{pedido.status}})</p>
                            </div>
                        </div>
                        <div class="status_main_02">
                            <div class="status_icone">
                                <i class='bx bx-time-five'></i>
                            </div>
                            <div class="status_stat">
                                <p>{{pedido.time}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <div class="button_aceitar">
                            <a href="">ACEITAR PEDIDO</a>
                        </div>
                        <div class="button_cancelar">
                            <a href="">CANCELAR PEDIDO</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </v-app>
</template>
  
<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'

@Component({
    components: {},
})
export default class Pedidos extends Vue {
    pedidos = [{
            id: 'pedido-01',
            numero: '1º',
            pedido: '0000',
            mesa: '00',
            item: 'item 01',
            status: 'Pendente',
            time: '00:00',
        }]
}

</script>
  
<style scoped>
.v-application p {
    margin-bottom: 0px;
}

.pedidos {
    padding: 2rem;
    font-family: "Ubuntu";
    background-color: rgb(212 226 255);
    height: 100%;
}

.comanda_pedido {
    width: 15rem;
    height: auto;
    background: #ffffff;
}

.comanda_info {
    background: #84a0b6;
    height: auto;
}

.comanda_obs {
    background: #ffffff;
    height: auto;
    padding: 1rem;
}

.comanda_status {
    background: #84a0b6;
    height: 6.8rem;
}

.info_num {
    background: #001e35;
    color: white;
    display: flex;
    border-radius: 0.5rem;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
}

.info_num p {
    padding: 0.5rem;
}

.comanda_info_num {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.info_comanda {
    margin-top: 0.5rem;
}

.info_num_pedido {
    background: #001e35;
    color: white;
    display: flex;
    border-radius: 0.5rem;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
}

.info_num_pedido p {
    padding: 0.5rem;
}

.mesa_comanda {
    text-align: center;
    color: #001e35;
}

.status_main {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.status_main_02,
.status_main_01 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.4rem;
}

.status_icone {
    margin-right: 0.2rem;
}

.buttons {
    text-align: center;
    margin-top: 1rem;
}

.buttons a {
    text-decoration: none;
}

.button_cancelar {
    margin-top: 0.5rem;
}

.button_aceitar a {
    background: rgb(0, 83, 32);
    padding: 0.4rem;
    font-size: 0.8rem;
    border-radius: 0.8rem;
    color: white;
    font-family: "Ubuntu";
}

.button_cancelar a {
    background: rgb(80, 0, 0);
    color: white;
    font-size: 0.8rem;
    padding: 0.4rem;
    border-radius: 0.8rem;
    font-family: "Ubuntu";
}
</style>