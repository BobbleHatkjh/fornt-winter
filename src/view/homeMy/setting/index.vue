<template>
    <div class="setting_bac">

        <!--标题栏-->
        <van-nav-bar
                title="设置"
                @click-left="onClickLeft"
                :z-index="99"
        >
            <div slot="left">
                <van-icon name="arrow-left" size="22" color="#ffa857"/>
            </div>
        </van-nav-bar>


        <div class="setting_logo">
            <img :src="logo" alt=""/>
        </div>

        <div class="setting_frame">
            <button-animate :div_style="'setting_check'" :animate_style="'touch_bac'" @click="settingSwitch('版本')">
                检查版本
            </button-animate>
            <button-animate :div_style="'setting_check'" :animate_style="'touch_bac'">
                关于应用
            </button-animate>
            <button-animate :div_style="'setting_check'" :animate_style="'touch_bac'" @click="settingSwitch('缓存')">
                清除缓存
            </button-animate>
            <van-cell center title="动画效果" style="color: #e6974f">
                <van-switch
                        active-color="#ffa857"
                        v-model="animate_show"
                        slot="right-icon"
                        @change="switchChange"
                        size="24"
                />
            </van-cell>
        </div>


        <div class="logout" @click="logOut">
            <a>退出登陆</a>
        </div>

    </div>
</template>

<script>
    import {NavBar, Icon, Switch, Cell, Toast} from 'vant';
    import buttonAnimate from '../../../component/animate_button/index';
    import logo from '../../../assets/logo.png'

    export default {
        components: {
            buttonAnimate,
            [NavBar.name]: NavBar,
            [Icon.name]: Icon,
            [Switch.name]: Switch,
            [Cell.name]: Cell,
        },
        data() {
            return {
                animate_show: true,
                logo: logo

            }
        },
        methods: {

            animateSet() {   // 取本地animate_show
                localStorage.getItem('animate_show') === 'true'
                    ? this.animate_show = true : this.animate_show = false;
            },
            switchChange(animate_status) {  // 改变animate按钮
                localStorage.setItem('animate_show', animate_status);
            },
            onClickLeft() {
                this.$router.go(-1)
            },
            logOut() {   // 退出
                localStorage.setItem('login', 'false');
                this.$router.push('login')
            },
            settingSwitch(way) {  // 清除缓存
                switch(way){
                    case '版本':
                        Toast('当前版本号 1.04 已是最新版本');
                        break;
                    case '缓存':
                        Toast('成功清除缓存');
                        break;
                }

            }
        },

        async created() {
            await this.animateSet();

        },
        destroyed() {

        },
    };
</script>

<style lang="less">
    .touch_bac {
        background-color: rgba(215, 142, 73, 0.15);
    }
    .setting_bac {
        width: 100%;
        user-select: none;

        .setting_logo {
            display: flex;
            height: 100px;
            width: 91%;
            margin: 15px auto;
            padding-top: 50px;
            border-radius: 12px;
            justify-content: center;
            box-shadow: 0 0 8px #dedede;
            align-items: center;
            background-color: white;
            animation: slip_move 0.5s;
            animation-direction: alternate;

            img{
                height: 80px;
            }
        }

        .setting_frame {
            width: 91%;
            margin: 15px auto;
            border-radius: 12px;
            background-color: white;
            box-shadow: 0 0 8px #dedede;
            overflow: hidden;
            font-size: 14px;
            color: #e6974f;
            animation: slip_move 0.5s;
            animation-direction: alternate;

            .setting_check {
                display: flex;
                height: 46px;
                padding-left: 16px;
                align-items: center;
            }
        }

        .logout {
            display: flex;
            height: 48px;
            width: 91%;
            margin: 15px auto;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            box-shadow: 0 0 8px #dedede;
            background-color: white;
            animation: slip_move 0.5s;
            animation-direction: alternate;

            a {
                color: #ff4a39;
            }
        }
    }
    ::-webkit-scrollbar {
        width: 0 ;
    }


</style>