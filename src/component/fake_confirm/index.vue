<template>
    <div class="confirm_bac">

    </div>
</template>

<script>
    import {Tabbar, TabbarItem, NavBar, Icon, Switch, Sticky, Cell} from 'vant';

    export default {
        components: {
            [NavBar.name]: NavBar,
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
            [Icon.name]: Icon,
            [Sticky.name]: Sticky,
            [Switch.name]: Switch,
            [Cell.name]: Cell,
        },
        data(){
            return{
                animate_show: true,

            }
        },
        methods: {

        },

        async created(){

        },
        destroyed() {

        },
    };
</script>

<style lang="less">
    .confirm_bac{
        width: 100%;
    }
</style>