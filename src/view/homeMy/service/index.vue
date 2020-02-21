<template>
    <div class="service_bac">

        <!--标题栏-->
        <van-nav-bar
                title="智能客服"
                @click-left="onClickLeft"
                :z-index="99"
        >
            <div slot="left">
                <van-icon name="arrow-left" size="22" color="#ffa857"/>
            </div>
        </van-nav-bar>




    </div>
</template>

<script>
    import { NavBar, Icon, Switch, Cell} from 'vant';
    // import buttonAnimate from "../../../component/animate_button/index";

    export default {
        components: {
            // buttonAnimate,
            [NavBar.name]: NavBar,
            [Icon.name]: Icon,
            [Switch.name]: Switch,
            [Cell.name]: Cell,
        },
        data() {
            return {

            }
        },
        methods: {


            onClickLeft() {
                this.$router.go(-1)
            },

        },

        async created() {


        },
        destroyed() {

        },
    };
</script>

<style lang="less">
    .touch_bac {
        background-color: rgba(215, 142, 73, 0.15);
    }
    .service_bac {
        width: 100%;
        user-select: none;


    }
    ::-webkit-scrollbar {
        width: 0 ;
    }


</style>