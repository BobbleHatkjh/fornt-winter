<template>
    <div class="person_bac">
        <!--标题栏-->
        <van-nav-bar
                title="个人资料"
                @click-left="onClickLeft"
                :z-index="99"
        >
            <div slot="left">
                <van-icon name="arrow-left" size="22" color="#ffa857"/>
            </div>
        </van-nav-bar>

        <div class="profile_avatar">

        </div>

        <div class="profile_frame">
            <van-field class="profile_field" v-model="user_name" label="真实姓名"/>
            <van-field class="profile_field" v-model="user_phone" label="手机号码" />
            <van-field class="profile_field" v-model="user_phone" label="证件信息" />
            <van-field class="profile_field" v-model="user_phone" label="电子邮箱" />
            <van-field class="profile_field" v-model="user_phone" label="修改密码" />
        </div>

        <div class="update_button">
            更新信息
        </div>


    </div>
</template>

<script>
    // import my_bac from '../../../assets/my_bac.png'

    import {Icon, NavBar, Field} from "vant";

    export default {
        components: {
            [NavBar.name]: NavBar,
            [Icon.name]: Icon,
            [Field.name]: Field,
        },
        data() {
            return {
                user_name: '',
                user_phone: ''
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
    .person_bac {
        width: 100%;

        .profile_avatar{
            height: 100px;
            width: 91%;
            margin: 15px auto;
            border-radius: 12px;
            background-color: white;
            box-shadow: 0 0 8px #dedede;
            animation: slip_move 0.5s;
            animation-direction: alternate;
        }

        .profile_frame{
            width: 91%;
            margin: 15px auto;
            padding: 2px 0;
            border-radius: 12px;
            overflow: hidden;
            background-color: white;
            box-shadow: 0 0 8px #dedede;
            animation: slip_move 0.5s;
            animation-direction: alternate;

            .profile_field{
                margin: 0 auto;
                color: #e6974f;
            }
        }

        .update_button{
            display: flex;
            height: 48px;
            width: 91%;
            margin: 15px auto;
            border-radius: 12px;
            justify-content: center;
            align-items: center;
            background-color: #ffa857;
            color: white;
            box-shadow: 0 0 8px #dedede;
            animation: slip_move 0.5s;
            animation-direction: alternate;
        }



    }
    ::-webkit-scrollbar {
        width: 0 ;
    }

</style>