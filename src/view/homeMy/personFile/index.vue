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
            <div class="profile_avatar_word">
                <a>修改头像</a>
            </div>
            <div class="profile_avatar_img">
                <img :src="avatar" alt="" />
            </div>
        </div>

        <div class="profile_frame">
            <van-field class="profile_field" v-model="user_name" label="真实姓名" placeholder="请输入文本"/>
            <van-field class="profile_field" v-model="user_phone" label="手机号码" placeholder="请输入文本"/>
            <van-field class="profile_field" v-model="user_phone" label="证件信息" placeholder="请输入文本"/>
            <van-field class="profile_field" v-model="user_phone" label="电子邮箱" placeholder="请输入文本"/>
            <van-field class="profile_field" v-model="user_phone" label="修改密码" placeholder="请输入文本"/>
        </div>

        <div class="update_button">
            验证并更新
        </div>


    </div>
</template>

<script>
    import my_avatar from '../../../assets/npm-ad.png'

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
                user_phone: '',
                avatar: my_avatar
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
            display: flex;
            height: 100px;
            width: 91%;
            margin: 15px auto;
            border-radius: 12px;
            background-color: white;
            box-shadow: 0 0 8px #dedede;
            align-items: center;
            animation: slip_move 0.5s;
            animation-direction: alternate;

            .profile_avatar_word{
                margin: auto auto auto 16px;

                a{
                    font-size: 14px;
                    color: #e6974f;
                }
            }
            .profile_avatar_img{
                display: flex;
                height: 75px;
                width: 75px;
                margin: auto 16px auto auto;
                border-radius: 400px;
                background-color: #979797;
                box-shadow: 0 0 8px #919191;
                overflow: hidden;

                img{
                    height: 100%;
                }
            }
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