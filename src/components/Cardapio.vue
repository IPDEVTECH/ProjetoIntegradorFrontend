<template>
    <v-app>
        <h1>Cardápio</h1>
        <div class="cardapio-itens">
            <div class="item-cardapio" v-for="(produto, index) in produtos" :key="index">
                <a class="cardapio_modal">
                    <div class="img"></div>
                </a>
            </div>

            <div class="adicionar-item item-cardapio" @click="adicionarProduto">
                <i class='bx bx-plus'></i>
            </div>
        </div>
    </v-app>
</template>
  
<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'

@Component({
    components: {},
})

export default class Cardapio extends Vue {
    produtos = [
        {
            id: 'produto-1',
        },
    ];

    adicionarProduto() {
        const novoProduto = {
            id: `mesa-${this.produtos.length + 1}`,
            numero: this.produtos.length + 1,
        };
        this.produtos.push(novoProduto);
    }
}

</script>
  
<style scoped>
/* CARDAPIO */

.opcao-cardapio {
    margin-top: 1rem;
}

.cardapio-itens {
    margin-top: 1rem;
}

.cardapio {
    padding: 2rem;
    font-family: "Ubuntu";
}

.img {
    width: 13rem;
    height: 13rem;
    border-radius: 2rem;
    background-image: url('../assets/hamburguer.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.item-cardapio {
    margin: 1rem;
}

.submenu a {
    cursor: pointer;
}

.submenu-itens i {
    font-family: "Ubuntu";
    font-weight: bold;
}

.cardapio-itens {
    display: flex;
    flex-wrap: wrap;
}

.adicionar-item {
    width: 13rem;
    height: 13rem;
    border-radius: 2rem;
    background-color: #1a88dd;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
}

.adicionar-item i {
    font-size: 5rem;
}
</style>