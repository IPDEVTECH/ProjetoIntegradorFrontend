<template>
  <v-app>
    <div class="dashboard" id="dashboard_id">
      <h1>Dashboard</h1>
      <div class="cards">
        <div v-for="card in cards" :key="card.id" class="card" :id="card.id">
          <div class="card-info">
            <h2>{{ card.titulo }}</h2>
            <h1>{{ card.quantidade }}</h1>
          </div>
          <div class="card-icone">
            <i :class="card.icone"></i>
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
export default class CardDashboard extends Vue {
  cards = [
    {
      id: 'card-01',
      titulo: 'PEDIDOS REALIZADOS',
      quantidade: '-',
      icone: 'bx bxs-comment-check'
    },
    {
      id: 'card-02',
      titulo: 'TOTAL VENDIDO',
      quantidade: 'R$ 00,00',
      icone: 'bx bx-dollar'
    },
    {
      id: 'card-03',
      titulo: 'PEDIDO CANCELADO',
      quantidade: '-',
      icone: 'bx bxs-comment-x'
    },
    {
      id: 'card-04',
      titulo: 'MESA DISPONÍVEL',
      quantidade: '-',
      icone: 'bx bx-table'
    }
  ];
}

</script>

<style scoped>
.dashboard {
  padding: 1rem;
  font-family: "Ubuntu";
  background-color: rgb(212 226 255);
  height: 100%;
}

.cards {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
}

.card {
  padding: 1rem;
  width: 16rem;
  height: 6rem;
  background: rgb(255, 255, 255);
  margin: 1rem;
  border-radius: 1rem;
  display: flex;
  font-family: "Ubuntu";
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}

.card h2 {
  color: rgb(36, 36, 36);
  font-family: "Ubuntu";
  font-weight: 700;
  font-size: 0.8rem;
  min-width: 141px;
}

.card-icone {
  margin-left: 1rem;
  font-size: 3rem;
}
</style>