import { reactive } from 'vue';

export const store = reactive({
    cardsEndpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    archetypesEndpoint: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cards: [],
    archetypes: [],
    loading: true,
})