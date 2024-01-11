<script>
import axios from 'axios';
import { store } from '../store.js';

import SingleCard from './SingleCard.vue';

export default {
    name: 'Cards',
    components: {
        SingleCard,
    },
    data(){
        return{
            store,
        }
    },
    methods: {
        drawCards(){
            axios.get(store.endpoint).then((response) =>{
                this.store.cards = response.data.data;
                console.log(response.data.data);
            })
        }
    },
    created() {
        this.drawCards();
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <SingleCard v-for="card, index in store.cards" :key="index" :card="card" />
        </div>
    </div>
</template>

<style lang="scss">

</style>
