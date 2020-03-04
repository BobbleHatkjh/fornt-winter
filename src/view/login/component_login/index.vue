<template>
    <div class="c_login_bac">
        <div class="login_phone">
            <van-field
                    class="login_field"
                    v-model="phone_value"
                    placeholder="手机号"
                    @input="fieldChange"
            />
        </div>
        <div class="login_phone">
            <van-field
                    class="login_field"
                    v-model="log_pass_value"
                    placeholder="密码"
                    type="password"
                    @input="fieldChange"
            />
        </div>

        <div class="login_button" @click="loginButton" :style="ifOk && okStyle">
            <a>登陆</a>
        </div>
        <div class="login_change">
            <div>忘记密码</div>
            <div @click="toRegisterButton">快速注册</div>
        </div>

    </div>
</template>

<script>
    import {Field} from 'vant';
    import {accountLogin} from "../../../../services/interface";

    export default {
        components: {
            [Field.name]: Field,
        },
        data() {
            return {
                phone_value: '',   // 用户手机号
                log_pass_value: '',  // 密码
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
                console.log(this.okStyle);
                (this.phone_value !== '' && this.log_pass_value !== '')
                    ?
                    this.ifOk = true
                    :
                    this.ifOk = false;
            },
            toRegisterButton() {
                this.$emit('toRegister');
            },
            async loginButton() {
                if (this.ifOk) {
                    const loginData = {
                        method: 'POST',
                        url: 'Students/Login',
                        data: {
                            id: this.phone_value,
                            pwd: this.log_pass_value
                        }
                    };
                    const ans = await accountLogin(loginData);
                    console.log('login', ans);
                    if(ans.status === 200){
                        this.$store.state.home_turn = 'book';
                        localStorage.setItem('login','true');
                        await this.$router.push('home')
                    }

                }


            }
        },
        created() {

        },
        destroyed() {

        },
    };
</script>

<style lang="less">
    .c_login_bac {
        width: 100%;

        .login_phone {
            height: 42px;
            width: 80%;
            margin: 15px auto;
            border-bottom: 1px solid #ffa857;

            .login_field {
                height: 100%;
                margin: auto;
                font-size: 16px;
                color: #ffa857;
                background-color: rgba(0, 0, 0, 0);
            }

            ::placeholder {
                color: #5e5e5e;
            }
        }

        .login_change {
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

        .login_button {
            display: flex;
            height: 48px;
            width: 30%;
            margin: 14px auto 8px auto;
            justify-content: center;
            transition: background-color 500ms, color 500ms, width 500ms;
            align-items: center;
            border-radius: 12px;
            color: #686868;

            /*font-weight: bolder;*/
        }
    }
</style>