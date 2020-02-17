<template>
    <div class="login_bac" :style="sss">

        <div style="height: 120px" />
        <div class="login_test" @click="loginButton">
            登陆 #测试#
        </div>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem, NavBar } from 'vant';
    import login_pic from '../../assets/login.png'

    export default {
        components: {
            [NavBar.name]: NavBar,
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem

        },
        data(){
            return{
                sss:{
                    height:'',
                    background: "url('" + login_pic + "') no-repeat center center fixed",
                    backgroundSize: "cover",
                    // filter: "blur(10px)"
                }
            }
        },
        methods: {
            getHeight(){
                this.sss.height = window.innerHeight + 'px';
                // this.h_b_bac.filter = "blur(10px)"
            },
            loginButton(){
                localStorage.setItem('login','true');
                this.$router.push('home')
            }
        },
        async created(){
            this.getHeight();

        },
        destroyed(){

        },
    };
</script>

<style lang="less">
    .login_bac{
        width: 100%;

        .login_test{
            display: flex;
            height: 50px;
            width: 80%;
            margin: auto;
            justify-content: center;
            align-items: center;
            color: #ffa857;
            background-color: #646464;
        }
    }
</style>