<template>
    <div class="login_bac" :style="sss">

        <div style="height: 110px" />
        <div class="login_logo">
            <img :src="logo" alt="">
        </div>
        <component-login v-if="ifLogin" @toRegister="changeComponent('toRe')"/>
        <component-register v-if="!ifLogin" @toLogin="changeComponent('toLo')"/>
    </div>
</template>

<script>
    import componentLogin from './component_login/index.vue'
    import componentRegister from './component_register/index.vue'
    import login_pic from '../../assets/login.png'
    import logo from '../../assets/logo.png'

    export default {
        components: {
            componentLogin,
            componentRegister
        },
        data(){
            return{
                ifLogin: true,
                logo:logo,
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
            changeComponent(way){
                way === 'toRe' ? this.ifLogin = false : this.ifLogin = true
            }
        },
        beforeCreate() {
            localStorage.getItem('login') === 'true' && this.$router.push('home');
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
        user-select: none;

        .login_logo{
            display: flex;
            height: 60px;
            width: 100%;
            margin: 10px auto;
            justify-content: center;
            align-items: center;

            img{
                height: 100%;
            }
        }

    }
</style>