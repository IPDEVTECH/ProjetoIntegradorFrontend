<template>
    <v-app>

        <div class="dashboard" id="dashboard_id">
            <h1>Dashboard</h1>

            <div class="cards">

                <div class="card" id="card-01">
                    <div class="card-info">
                        <h2>PEDIDOS REALIZADOS</h2>
                        <h1>-</h1>
                    </div>

                    <div class="card-icone">
                        <i class='bx bxs-comment-check'></i>
                    </div>

                </div>
            </div>
        </div>

    </v-app>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator'

@Component({
    components: {
        
    },
})
export default class CardDashboard extends Vue {

}

</script>

<style scoped>
.dashboard {
  padding: 2rem;
  font-family: "Ubuntu";
}

.cards {
  margin-top: 1rem;
  display: flex;
}

.card {
  padding: 1rem;
  width: 20rem;
  height: 6rem;
  background: rgb(255, 255, 255);
  margin: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}

.card h2 {
  color: rgb(36, 36, 36);
  font-family: "Ubuntu";
  font-weight: 700;
  font-size: 1rem;
}

.card h1 {
  margin-top: 1rem;
}

.card-icone {
  margin-left: 2rem;
  font-size: 4rem;
}
</style>