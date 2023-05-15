<template>
    <div class="about">

    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css';

@Component({
    components: {
        Toast
    },
})
export default class AboutView extends Vue {

}
</script>
