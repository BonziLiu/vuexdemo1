<template>
    <div id="money">
       <h2>{{ totalMoney }}</h2>
    </div>
</template>

<script>
    export default{
        name: "money",
        data () {
            return {
                
            }
        },
        // 获取vuex中的状态，我们一般使用计算属性来操作
        computed:{
            totalMoney () {
                //   return this.$store.state.money;
                return this.$store.getters.getMoneyStr;
            }
        }
    }
</script>

<style scoped>

</style>
