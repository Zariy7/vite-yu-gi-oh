<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppLoader from './components/AppLoader.vue'

import { store } from './store.js';

export default {
  components:{
    AppHeader,
    AppMain,
    AppLoader
  },
  data(){
        return{
            store,
        }
  },
    methods: {
        drawCards(){
            axios.get(store.cardsEndpoint).then((response) =>{
                this.store.cards = response.data.data;
                //console.log(response.data.data);
                store.loading = !store.loading;
                //console.log(store.loading);
            })
        }
    },
    created() {
        this.drawCards();
    }
}
</script>

<template>
  <AppLoader v-if="store.loading" />
  <div v-else>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss';

</style>
