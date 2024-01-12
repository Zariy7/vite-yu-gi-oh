<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'ArchetypesSelection',
    data(){
        return{
            store,
        }
    },
    methods:{
        getArchetypes(){
            axios.get(store.archetypesEndpoint).then((response) =>{
                store.archetypes = response.data;
                //console.log(store.archetypes);
            })
        }
    },
    created(){
        this.getArchetypes();
    }
}
</script>

<template>
    <div class="w-25 my-3">
        <label for="Archetype">Look for a specific archetype:</label>
        <select name="Archetype" id="Archetype" class="form-select">
            <option v-for="archetype, index in store.archetypes" :key="index" :value="store.archetypes[index].archetype_name">{{store.archetypes[index].archetype_name}}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
</style>
