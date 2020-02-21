<template>
    <div class="home_my" :style="my_bac">
        <div style="height: 1px" />

        <!--个人信息-->
        <div class="my_frame" :style="home_my_bac">
            <div class="my_circle">
                <div class="my_diamond">
                    <van-icon name="diamond" size="30" :style="avatar_word"/>
                </div>

                <van-circle
                        v-model="currentRate"
                        :stroke-width="76"
                        :rate="30"
                        size="100px"
                        color="#ffa857"
                        layer-color="#404040"
                        class="my_circle_c"
                >
                    <div class="avatar">
                        <div class="avatar_div">
                            <img :src="avatar_img" alt=""/>
                        </div>
                    </div>
                </van-circle>

                <div class="my_circle_word">
                    <div class="my_circle_word_frame">
                        <a>黄金会员</a>
                    </div>
                </div>
            </div>

            <div class="my_nike">
                <div class="my_nike_name">
                    康嘉禾
                </div>
                <div class="my_nike_phone">
                    137****9501
                </div>
<!--                <div class="my_discord_frame">-->
<!--                    <div class="my_discord">-->
<!--                        <van-icon name="underway" />-->
<!--                    </div>-->
<!--                </div>-->
            </div>



            <div class="my_edit" @click="switchButton('person')">
                <van-icon name="edit" size="22" />
            </div>

        </div>

        <!--GRID-->
        <div class="my_grid">
            <button-animate :div_style="'grid_frame'" :animate_style="'touch_bac'">
                <div class="grid_icon">
                    <van-icon name="like-o" size="24"/>
                </div>
                <div class="grid_word">
                    <a>我的喜欢</a>
                </div>
            </button-animate>

            <button-animate :div_style="'grid_frame'" :animate_style="'touch_bac'" @click="clickGrid('history')">
                <div class="grid_icon">
                    <van-icon name="todo-list-o" size="24"/>
                </div>
                <div class="grid_word">
                    <a>历史订单</a>
                </div>
            </button-animate>

            <button-animate :div_style="'grid_frame'" :animate_style="'touch_bac'">
                <div class="grid_icon">
                    <van-icon name="user-circle-o" size="24"/>
                </div>
                <div class="grid_word">
                    <a>人脸识别</a>
                </div>
            </button-animate>
        </div>

        <!--        下面的选项-->
        <div class="my_list">
            <button-animate :div_style="'my_list_frame'" :animate_style="'touch_bac'" @click="switchButton('vip')">
                <div class="my_list_icon">
                    <van-icon name="diamond-o" size="20"/>
                </div>
                <div class="my_list_word">
                    <a>会员计划</a>
                </div>
                <div class="my_list_right">
                    <van-icon name="arrow" size="20"/>
                </div>
            </button-animate>

            <button-animate :div_style="'my_list_frame'" :animate_style="'touch_bac'" @click="switchButton('overview')">
                <div class="my_list_icon">
                    <van-icon name="eye-o" size="20"/>
                </div>
                <div class="my_list_word">
                    <a>最近浏览</a>
                </div>
                <div class="my_list_right">
                    <van-icon name="arrow" size="20"/>
                </div>
            </button-animate>

            <button-animate :div_style="'my_list_frame'" :animate_style="'touch_bac'" @click="switchButton('info')">
                <div class="my_list_icon">
                    <van-icon name="description" size="20"/>
                </div>
                <div class="my_list_word">
                    <a>常用信息</a>
                </div>
                <div class="my_list_note">
                    <a>常用旅客/地址/发票</a>
                </div>
                <div class="my_list_right">
                    <van-icon name="arrow" size="20"/>
                </div>
            </button-animate>

            <button-animate :div_style="'my_list_frame'" :animate_style="'touch_bac'" @click="switchButton('service')">
                <div class="my_list_icon">
                    <van-icon name="service-o" size="20"/>
                </div>
                <div class="my_list_word">
                    <a>智能客服</a>
                </div>
                <div class="my_list_right">
                    <van-icon name="arrow" size="20"/>
                </div>
            </button-animate>

            <button-animate :div_style="'my_list_frame'" :animate_style="'touch_bac'">
                <div class="my_list_icon">
                    <van-icon name="smile-comment-o" size="20"/>
                </div>
                <div class="my_list_word">
                    <a>反馈吐槽</a>
                </div>
                <div class="my_list_right">
                    <van-icon name="arrow" size="20"/>
                </div>
            </button-animate>

            <button-animate :div_style="'my_list_frame'" :animate_style="'touch_bac'" @click="switchButton('setting')">
                <div class="my_list_icon">
                    <van-icon name="setting-o" size="20"/>
                </div>
                <div class="my_list_word">
                    <a>设置</a>
                </div>
                <div class="my_list_right">
                    <van-icon name="arrow" size="20"/>
                </div>
            </button-animate>

        </div>


    </div>
</template>

<script>
    import {Tabbar, Icon, TabbarItem, NavBar, Circle} from 'vant'
    import buttonAnimate from '../../component/animate_button/index.vue'
    import my_bac from '../../assets/my_bac.png'
    import avatar_test from '../../assets/npm-ad.png'

    export default {
        components: {
            buttonAnimate,
            [NavBar.name]: NavBar,
            [Tabbar.name]: Tabbar,
            [Icon.name]: Icon,
            [TabbarItem.name]: TabbarItem,
            [Circle.name]: Circle,
        },
        data() {
            return {
                my_bac: {
                    height: '',
                },
                avatar_img: avatar_test,
                avatar_word: {
                    color: '#ffa857'
                },
                home_my_bac: {
                    background: "url('" + my_bac + "') no-repeat center center",
                    backgroundSize: "cover",
                },
                currentRate: 100
            }
        },
        methods: {
            getHeight() {
                this.my_bac.height = window.innerHeight - 50 + 'px';
            },
            clickGrid(way){
                switch (way) {
                    case 'like':
                        console.log('like');
                        break;
                    case 'history':
                        console.log('history');
                        this.$emit('BarChange','orders');
                        this.$store.state.home_turn = 'orders';
                        break;
                    case 'face':
                        console.log('face');
                        break;
                }
            },
            switchButton(way) {  // 进入下一级页面
                switch (way) {
                    case 'person':
                        this.$router.push('proFile');
                        break;
                    case 'vip':
                        this.$router.push('vip');
                        break;
                    case 'overview':
                        this.$router.push('overview');
                        break;
                    case 'info':
                        this.$router.push('normalInfo');
                        break;
                    case 'service':
                        this.$router.push('service');
                        break;
                    case 'setting':
                        this.$router.push('setting');
                        break;
                    default:
                        break;
                }
            }
        },
        async created() {
            this.getHeight();
        },
        destroyed() {

        },
    };
</script>

<style lang="less">
    .touch_bac {
        background-color: rgba(215, 142, 73, 0.15);
    }

    .home_my {
        width: 100%;
        user-select: none;

        .my_frame {
            display: flex;
            height: 180px;
            width: 91%;
            border-radius: 12px;
            margin: 15px auto;
            box-shadow: 0 0 8px #cccccc;
            /*animation: slip_move 0.5s;*/
            /*animation-direction: alternate;*/

            .my_circle {
                display: block;
                height: 100%;
                width: 120px;
                float: right;
                text-align: right;

                .my_diamond {
                    position: absolute;
                    display: flex;
                    height: 30px;
                    width: 30px;
                    margin: 13px auto auto 55px;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;
                }

                .my_circle_c {
                    margin: 25px 0 10px auto;
                }

                .avatar {
                    display: flex;
                    height: 100px;
                    width: 100px;

                    .avatar_div {
                        height: 94px;
                        width: 94px;
                        margin: auto;
                        border-radius: 500px;
                        overflow: hidden;
                    }

                    .avatar_div img {
                        height: 100%;
                        width: 100%;
                    }
                }

                .my_circle_word {
                    display: flex;
                    width: 100px;
                    margin: 0 0 auto auto;
                    justify-content: center;

                    .my_circle_word_frame {
                        display: flex;
                        height: 22px;
                        width: 90px;
                        margin: auto;
                        border-radius: 5px;
                        justify-content: center;
                        align-items: center;
                        font-size: 14px;
                        color: #505050;
                        font-weight: bolder;
                        background-color: #ffa857;
                    }
                }
            }

            .my_nike {
                width: 100px;
                margin-left: 15px;
                padding-top: 30px;
                color: white;

                .my_nike_name {
                    height: 30px;
                    font-size: 19px;
                    font-weight: bolder;
                    align-items: center;
                }

                .my_nike_phone {
                    height: 30px;
                    font-size: 16px;
                    font-weight: bolder;
                    align-items: center;
                }
                .my_discord_frame{
                    display: flex;
                    height: 30px;
                    width: 150px;

                    .my_discord{
                        display: block;
                        height: 66px;
                        width: 56px;
                        justify-content: center;
                        border-radius: 10px;
                        background-color: #ffa857;
                    }
                }
            }



            .my_edit {
                height: 22px;
                width: 22px;
                margin: 0 0 auto auto;
                padding: 16px;
                color: #ffa857;
            }
        }

        .my_grid {
            display: flex;
            height: 60px;
            width: 91%;
            margin: 13px auto;
            border-radius: 12px;
            box-shadow: 0 0 8px #dedede;
            justify-content: space-around;
            background-color: white;
            animation: slip_move 0.5s;
            animation-direction: alternate;

            .grid_frame {
                height: 100%;
                width: 80px;
                color: #ffa857;

                .grid_icon {
                    display: flex;
                    height: 58%;
                    width: 100%;
                    align-items: flex-end;
                    justify-content: center;
                }

                .grid_word {
                    display: flex;
                    height: 30%;
                    width: 100%;
                    padding-top: 1%;
                }

                .grid_word a {
                    font-size: 12px;
                    margin: auto;
                    color: #976334;
                }
            }

        }

        .my_list {
            display: block;
            width: 91%;
            margin: 10px auto;
            border-radius: 12px;
            box-shadow: 0 0 8px #dedede;
            background-color: white;
            overflow: hidden;
            animation: slip_move 0.5s;
            animation-direction: alternate;

            .my_list_frame {
                display: flex;
                height: 50px;
                padding: 0 5%;
                width: 90%;
                margin: 0 auto;

                .my_list_icon {
                    display: flex;
                    height: 100%;
                    width: 30px;
                    margin: auto 0;
                    align-items: center;
                    color: #ffa857;
                }

                .my_list_word {
                    display: flex;
                    height: 100%;
                    margin: auto auto auto 0;
                    align-items: center;
                    font-size: 14px;
                    color: #976334;
                }

                .my_list_note {
                    display: flex;
                    height: 100%;
                    margin: auto 4px auto auto;
                    align-items: center;
                    font-size: 12px;
                    color: #a0a0a0;
                }

                .my_list_right {
                    display: flex;
                    height: 100%;
                    width: 22px;
                    margin: auto 0;
                    align-items: center;
                    color: #ffa857;
                }

            }
        }
    }

    /*进入 的动画效果*/
    @keyframes slip_move {
        from {
            margin-top: 60px;
        }
        to {
            margin-top: 15px;
        }
    }
</style>