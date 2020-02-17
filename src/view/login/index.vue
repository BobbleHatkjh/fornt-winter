<template>
    <div class="login_bac" :style="sss">

        <div style="height: 110px" />
        <div class="login_logo">
            logo
        </div>
        <component-login v-if="ifLogin" @toRegister="changeComponent('toRe')"/>
        <component-register v-if="!ifLogin" @toLogin="changeComponent('toLo')"/>
    </div>
</template>

<script>
    import componentLogin from './component_login/index.vue'
    import componentRegister from './component_register/index.vue'
    import login_pic from '../../assets/login.png'

    export default {
        components: {
            componentLogin,
            componentRegister
        },
        data(){
            return{
                ifLogin: true,
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

        .login_logo{
            display: flex;
            height: 50px;
            width: 100%;
            justify-content: center;
            align-items: center;
        }

    }
</style>