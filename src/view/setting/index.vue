<template>
    <div class="setting_bac" >

        <!--标题栏-->
        <van-sticky>
            <van-nav-bar
                    title="设置"
                    @click-left="onClickLeft"
                    :z-index="99"
            >
                <div slot="left">
                    <van-icon name="arrow-left" size="22" color="#ffa857"/>
                </div>
            </van-nav-bar>
        </van-sticky>


        <div class="setting_logo">
            <a>logo</a>
        </div>


        <van-cell center title="动画效果" style="margin-top: 10px">
            <van-switch
                    active-color="#ffa857"
                    v-model="animate_show"
                    slot="right-icon"
                    @change="switchChange"
                    size="24"
            />
        </van-cell>

        <div class="logout" @click="logOut">
            <a>退出登陆</a>
        </div>

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

            animateSet(){   // 取本地animate_show
                localStorage.getItem('animate_show') === 'true'
                    ? this.animate_show = true : this.animate_show = false;
            },
            switchChange(animate_status){  // 改变animate按钮
                localStorage.setItem('animate_show',animate_status);
            },
            onClickLeft() {
                this.$router.go(-1)
            },
            logOut(){
                localStorage.setItem('login','false');
                this.$router.push('login')
            }
        },

        async created(){
            await this.animateSet();
            this.getHeight();

        },
        destroyed() {

        },
    };
</script>

<style lang="less">
    .setting_bac{
        width: 100%;

        .setting_logo{
            display: flex;
            height: 100px;
            width: 100%;
            padding-top: 50px;
            justify-content: center;
            align-items: center;
            background-color: white;
            margin: 20px auto 10px auto;
        }

        .logout{
            display: flex;
            height: 48px;
            width: 90%;
            margin: 20px auto;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            box-shadow: 0 0 8px #dedede;
            background-color: white;

            a{
                color: #ff4a39;
                font-weight: bolder;
            }
        }
    }
</style>