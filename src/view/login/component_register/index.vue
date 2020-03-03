<template>
    <div class="c_register_bac">

        <div class="login_phone">
            <van-field
                    class="login_field"
                    v-model="phone_value"
                    placeholder="填写您常用的手机号"
                    @input="fieldChange"
            />
        </div>
        <div class="login_phone">
            <van-field
                    class="login_field"
                    v-model="re_password_value"
                    placeholder="设定您的密码"
                    @input="fieldChange"
            />
        </div>
        <div class="login_check">
            <van-field
                    class="register_field_check"
                    v-model="code_value"
                    placeholder="验证码"
                    @input="fieldChange"
            />
            <div class="register_word">发送验证码</div>
        </div>
        <div class="register_button" @click="loginButton" :style="ifOk && okStyle">
            注册
        </div>
        <div class="register_change">
            <div>忘记密码</div>
            <div @click="toLoginButton">快速登陆</div>
        </div>
    </div>
</template>

<script>
    import {Field} from 'vant';

    export default {
        components: {
            [Field.name]: Field

        },
        data() {
            return {
                phone_value: '',   // 用户手机号
                re_password_value: '',   // 密码
                code_value: '',    // 验证码
                ifOk: false,
                okStyle: {
                    backgroundColor: '#ffa857',
                    color: 'white',
                    width: '80%'
                }
            }
        },
        methods: {
            fieldChange() {   // 输入框改变时触发
                (this.phone_value !== '' && this.log_pass_value !== '' && this.code_value !== '')
                    ?
                    this.ifOk = true
                    :
                    this.ifOk = false

            },
            toLoginButton() {
                this.$emit('toLogin');
            },
            loginButton() {
                localStorage.setItem('login', 'true');
                this.$router.push('home')
            }
        },
        created() {


        },
        destroyed() {

        },
    };
</script>

<style lang="less">
    .c_register_bac {
        width: 100%;

        .login_phone {
            height: 45px;
            width: 80%;
            margin: 15px auto;
            border-bottom: 1px solid #ffa857;

            .login_field {
                height: 100%;
                margin: auto;
                font-size: 15px;
                color: #ffa857;
                background-color: rgba(0, 0, 0, 0);
            }

            ::placeholder {
                color: #5e5e5e;
            }
        }

        .login_check {
            display: flex;
            height: 45px;
            width: 80%;
            margin: 15px auto;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #ffa857;

            .register_field_check {
                height: 100%;
                width: 60%;
                font-size: 15px;
                color: #ffa857;
                background-color: rgba(0, 0, 0, 0);

            }

            .van-cell:not(:last-child)::after {
                border-bottom: none !important;
            }

            .register_word {
                display: flex;
                height: 100%;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                color: #5e5e5e;
            }

            ::placeholder {
                color: #5e5e5e;
            }
        }

        .register_button {
            display: flex;
            height: 48px;
            width: 30%;
            margin: 14px auto 8px auto;
            justify-content: center;
            transition: background-color 500ms, color 500ms, width 500ms;
            align-items: center;
            border-radius: 12px;
            color: #ffa857;
        }

        .register_change {
            display: flex;
            height: 25px;
            width: 80%;
            margin: auto;
            justify-content: center;
            font-size: 14px;
            color: #ffa857;

            div {
                height: 25px;
                margin: auto 8px;
            }
        }
    }
</style>