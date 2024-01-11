<script>
import { store } from '../store.js';

export default {
    name: 'AppLoader',
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <div>
        We're loading...
    </div>
</template>

<style lang="scss">
</style>
