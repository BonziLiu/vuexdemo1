<template>
    <div id="banana">
        <h2>{{ title }}</h2>
        <button @click="add">购买一根{{ title }}</button>
        <button @click="reduce">丢弃一根{{ title }}</button>
    </div>
</template>

<script>
    export default{
        name: "banana",
        data () {
            return {
                title: '🍌',
                price: 5
            }
        },
        methods:{
            add () {
                //在组件中使用this.state来获取vuex的仓库
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
