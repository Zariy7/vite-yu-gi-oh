<script>
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

<style lang="scss" scoped>
</style>
