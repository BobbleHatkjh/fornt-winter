<template>
    <div class="setting_bac" :style="sss">

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

        <van-cell center title="动画效果" style="margin-top: 20px">
            <van-switch
                    active-color="#ffa857"
                    v-model="animate_show"
                    slot="right-icon"
                    @change="switchChange"
                    size="24"
            />
        </van-cell>

    </div>
</template>

<script>
    import {Tabbar, TabbarItem, NavBar, Icon, Switch, Sticky, Cell} from 'vant';
    // import sss from '../../assets/login_registor_bac.jpg'

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
                sss:{
                    height:'',
                }
            }
        },
        methods: {
            getHeight(){
                this.sss.height = window.innerHeight + 'px';
            },
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
    }
</style>