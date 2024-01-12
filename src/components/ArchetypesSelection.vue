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
        },
        filterArchetype(){
            let filter = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=';
            
            if(store.archetypeSearch != ''){
                store.archetypeSearch = store.archetypeSearch.replaceAll(' ', '%20');
                filter += store.archetypeSearch;
                //console.log(filter);

                axios.get(filter).then((response) =>{
                    this.store.cards = response.data.data;
                    //console.log(response.data.data);
                    //console.log(store.cards);
                })
            }

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
        <select name="Archetype" id="Archetype" class="form-select" v-model="store.archetypeSearch" @change="filterArchetype()"> <!-- @change="console.log(store.archetypeSearch)" -->
            <option value="" default>
                Select an archetype...
            </option>
            <option v-for="archetype, index in store.archetypes" :key="index" :value="store.archetypes[index].archetype_name">
                {{store.archetypes[index].archetype_name}}
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
</style>
