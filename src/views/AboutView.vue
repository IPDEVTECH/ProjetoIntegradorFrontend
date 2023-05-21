<template>
  <v-app>
    <menu-component></menu-component>
    
      <div class="conteudo">
       <card-dashboard></card-dashboard>
    </div>

  </v-app>
</template> 

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import CardDashboard from '@/components/CardDashboard.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css';

@Component({
    components: {
        CardDashboard,
        Toast,
        MenuComponent
    },
})
export default class AboutView extends Vue {

}
</script>

<style scoped>

.conteudo {
  position: absolute;
  left: 4.5rem;
  top: 4rem;
  right: 0;
  bottom: 0;
  background-color: #c2d9eb;
  z-index: 0;
}
</style>