<script>
import Cards from './Cards.vue';
import { store } from '../store.js';

export default {
    name: 'AppMain',
    components: {
        Cards,
    },
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <div class="bg-orange py-3">
        <div class="container">
            [archetype selection goes here]
        </div>
        <div class="container bg-black text-white">
            Found {{ store.cards.length }} cards.
        </div>
        <div class="container bg-white">
            <Cards />
        </div>
    </div>
</template>

<style lang="scss">

</style>
