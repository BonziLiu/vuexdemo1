<template>
    <div id="orange">
        <h2>{{ title }}</h2>
        <button @click="add">购买一个{{ title }}</button>
        <button @click="reduce">丢弃一个{{ title }}</button>
    </div>
</template>

<script>
    export default{
        name: "orange",
        data () {
            return {
                title: '🍊',
                price: 3
            }
        },
        methods:{
            add () {
                //异步
                this.$store.dispatch('add1', this.price);
            },
            reduce () {
                this.$store.dispatch('reduce1', this.price);
            }
        }
    }
</script>

<style scoped>

</style>
