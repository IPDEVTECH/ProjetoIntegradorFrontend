<template>
    <v-app>
        <div class="mesas" id="mesas_id">
            <h1>Mesas</h1>
            <div class="mesas-info">
                <a v-for="(mesa, index) in mesas" :key="index">
                    <div class="mesa" :id="mesa.id" :style="{ 'background-image': 'url(' + mesa.imagem + ')' }">
                        <span>{{ mesa.numero }}</span>
                    </div>
                </a>
                <div class="adicionar_mesa" @click="adicionarMesa">
                    <span><i class='bx bx-plus'></i></span>
                </div>
            </div>
        </div>
    </v-app>
</template>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {},
})
export default class Mesas extends Vue {
    mesas = [
    {
      id: 'mesa-01',
      numero: 1,
      imagem: require('../assets/mesa.png'),
    },
  ];

  adicionarMesa() {
    const novaMesa = {
      id: `mesa-${this.mesas.length + 1}`,
      numero: this.mesas.length + 1,
      imagem: require('../assets/mesa.png'),
    };
    this.mesas.push(novaMesa);
  }
}
</script>
  
<style scoped>
/* MESAS */

.mesas {
    padding: 2rem;
    font-family: "Ubuntu";
    background-color: rgb(212 226 255);
    height: 100%;
}

.mesa {
    width: 80px;
    height: 79.28px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform .2s;
}

.mesa img {
    width: 5rem;
    display: block;
}

.mesas-info {
    margin-top: 1rem;
}

.mesa {
    position: relative;
    display: inline-block;
    margin: 1rem;
}

.mesa:hover {
    transform: scale(1.1);
}


.mesa span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Ubuntu";
    font-size: 1.5rem;
    cursor: pointer;
}


.adicionar_mesa {
    background-color: #1a88dd;
    border-radius: 50%;
    background-image: none;
    width: 80px;
    height: 79.28px;
    transition: transform .2s;
}

.adicionar_mesa {
    position: relative;
    display: inline-block;
    margin: 1rem;
}

.adicionar_mesa span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Ubuntu";
    font-size: 1.5rem;
    cursor: pointer;
}

.mesa:last-child {
    margin-right: 0;
}
</style>