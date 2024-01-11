<script>
export default {
    name: 'SingleCards',
    props: {
        card: Object,
    }
}
</script>

<template>
    <div class="w-20 g-2">
        <div class="bg-orange">
            <img :src="`${card.card_images[0].image_url_small}`" class="yugioh-card">
            <div class="text-white font-weight-bold">
                {{ card.name }}
            </div>
            <div>
                {{ card.archetype }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .yugioh-card{
        width: 100%;
    }
</style>
