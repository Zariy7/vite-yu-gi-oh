<script>
import Cards from './Cards.vue';
import ArchetypesSelection from './ArchetypesSelection.vue';
import { store } from '../store.js';

export default {
    name: 'AppMain',
    components: {
        Cards,
        ArchetypesSelection,
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
            <ArchetypesSelection />
        </div>
        <div class="container bg-black text-white">
            Found {{ store.cards.length }} cards.
        </div>
        <div class="container bg-white">
            <Cards />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
