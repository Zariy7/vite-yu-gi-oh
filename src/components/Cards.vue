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
                this.store = response.data.result;
            })
        }
    },
    created() {
        this.drawCards();
        console.log(this.drawCards());
    }
}
</script>

<template>
    <div>
        Cards
    </div>
</template>

<style lang="scss" scoped>
</style>
