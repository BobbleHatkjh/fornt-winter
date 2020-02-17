<template>
    <div>
        <div class="home_bac" >
            <home_book v-if="active === 'book'" />
            <home_order v-if="active === 'orders'" />
            <home_my v-if="active === 'my'" />
        </div>


        <!--底部导航栏-->
        <van-tabbar v-model="active" active-color="#f4a054" @change="tabChange">
            <van-tabbar-item name="book" icon="home-o" />
            <van-tabbar-item name="orders" icon="orders-o" />
            <van-tabbar-item name="my" icon="user-o" />
        </van-tabbar>

    </div>
</template>


<script>
    import { Tabbar, TabbarItem, NavBar, Dialog } from 'vant';
    import home_book from '../homeBook/index.vue'
    import home_order from '../homeOrder/index.vue'
    import home_my from '../homeMy/index.vue'

    export default {
        components: {
            home_book,
            home_order,
            home_my,
            [NavBar.name]: NavBar,
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
            [Dialog.name]: Dialog,
        },
        data(){
            return{
                active: this.$store.state.home_turn,
            }
        },
        methods: {
            getLocal(){
                const animate_show = localStorage.getItem('animate_show');
                if(animate_show === null || animate_show === undefined){
                    // 第一次进入时 animate 初始化
                    localStorage.setItem('animate_show','true')
                }

            },
            tabChange(active){
                this.$store.state.page_change_status = 'next';  // 页面切换模式
                this.$store.state.home_turn = active
            },
            quitApp(){
                console.log('退出？');
                Dialog.confirm({
                    message: '确认要退出APP吗'
                }).then(() => {
                    // on confirm
                    this.$router.go(-1)
                }).catch(() => {
                    // on cancel
                });
            }

        },

        beforeCreate() {
            if(localStorage.getItem('login') !== 'true'){
                this.$router.push('login')
            }
        },
        created(){
            this.getLocal();

        },
        destroyed(){

        },
    };
</script>

<style lang="less">

    .home_bac{
        width: 100%;
        user-select: none;
    }

</style>