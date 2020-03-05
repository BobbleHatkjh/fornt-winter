<template>
    <div class="confirm_bac" :style="sss">

        <!--标题栏-->
        <van-sticky>
            <van-nav-bar
                    title="核对预定信息"
                    @click-left="onClickLeft"
                    :z-index="99"
            >
                <div slot="left">
                    <van-icon name="arrow-left" size="22" color="#ffa857"/>
                </div>
            </van-nav-bar>
        </van-sticky>


        <!--主体-->
        <div class="confirm_scroll">

            <!--图片，酒店名-->
            <div class="confirm_img">
                <div class="confirm_img_div">
                    <img :src="background.img" alt=""/>
                </div>
                <div class="confirm_img_name">
                    <a>汉庭天津大港店</a>
                    <div>欢迎您的入住</div>
                </div>
            </div>


            <!--日期-->
            <line-dashed/>
            <div class="confirm_time_shadow">
                <div class="confirm_time_change">
                    <div class="confirm_time_date">
                        <!--                    <van-icon name="notes-o" size="20" color="#ffa857" style="margin-right: 6px"/>-->
                        <a>{{date_chose.in.month}}月{{date_chose.in.date}}日 </a>
                        <van-icon name="arrow" color="#ffa857" size="18"/>
                        <a>{{date_chose.out.month}}月{{date_chose.out.date}}日</a>
<!--                        <a style="color: #646464;margin-left: 10px">大床房</a>-->
                    </div>
                    <div class="confirm_date_num">
                        <a>共{{date_chose.date_num}}晚</a>
                    </div>
                </div>
            </div>

            <!--房间类型-->
            <line-dashed/>
            <div class="confirm_hotel_type">
                <div class="type_frame">
                    <a style="margin-left: 16px;">精品大床房</a>
                    <a style="margin-right: 16px;color: #737373">含两份早餐</a>
                </div>

            </div>


            <!--旅客信息-->
            <line-dashed/>
            <div class="confirm_note_shadow">
                <div class="confirm_note">
                    <div class="note_div">

                        <div class="note_person">
                            <van-icon name="user-circle-o" />
                            <a>康嘉禾</a>
                        </div>
                        <div class="note_person">
                            <van-icon name="phone-circle-o" />
                            <a>137****9501</a>
                        </div>
                        <div class="note_remark">
                            <div class="remark_icon">
                                <van-icon name="comment-circle-o" />
                            </div>
                            <div class="remark_word">
                                填写备注
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!--优惠-->
            <line-dashed/>
            <div class="confirm_discount_shadow">
                <div class="confirm_discount">
                    <a>金会员</a>
                    <a>已节省
                        <span style="color: #ffa857; font-weight: bolder">
                            14.7¥
                        </span>
                    </a>
                </div>
            </div>


        </div>


        <!--确认栏-->
        <div class="bottom_sure">
            <div class="sure_left">
                <a>¥ 263.8</a>
            </div>
            <div class="sure_detail">
                <a>明细</a>
                <van-icon name="arrow-up" />
            </div>
            <div class="sure_button" @click="pressButton">
                确认订单
            </div>
        </div>


    </div>
</template>

<script>
    import {Tabbar, TabbarItem, NavBar, Sticky, Icon} from 'vant';
    import lineDashed from '../../component/line/index.vue'

    export default {
        components: {
            lineDashed,
            [NavBar.name]: NavBar,
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
            [Sticky.name]: Sticky,
            [Icon.name]: Icon,
        },
        data() {
            return {
                background: {
                    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582791708474&di=62544418aef32f5aeeb5385729138c1d&imgtype=0&src=http%3A%2F%2Fwww.xiujukoo.com%2Fupimg%2Fallimg%2F160413%2F0850192.jpg'
                },
                date_chose: {  // 选择的日期
                    date_num: 1,
                    in: {
                        month: 12,
                        date: 28,
                        week: "四"
                    },
                    out: {
                        month: 3,
                        date: 1,
                        week: "日"
                    }
                },
                sss: {
                    height: '',
                }
            }
        },
        methods: {
            getHeight() {
                this.sss.height = window.innerHeight + 'px';
            },
            onClickLeft() {
                this.$router.go(-1)
            },
            pressButton(){
                this.$store.state.home_turn = 'orders';
                this.$router.push('home');
            },

            onSubmit() {

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
    .confirm_bac {
        width: 100%;
        color: #323232;

        .confirm_scroll {
            width: 100%;
            overflow: auto;

            .confirm_img {
                height: 180px;
                width: 93%;
                margin: 12px auto 0 auto;
                box-shadow: 0 0 8px #dedede;
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
                background-color: white;
                overflow: hidden;

                .confirm_img_div {
                    display: flex;
                    height: 165px;
                    width: 94%;
                    margin: 10px auto;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    overflow: hidden;

                    img {
                        position: relative;
                        width: 100%;
                    }
                }

                .confirm_img_name {
                    position: relative;
                    display: block;
                    height: 68px;
                    width: 94%;
                    margin: -72px auto 0 auto;
                    color: white;
                    font-size: 20px;
                    font-weight: bolder;
                    z-index: 2;

                    a {
                        margin-left: 12px;
                        letter-spacing: 1px;
                    }

                    div {
                        margin-left: 14px;
                        font-size: 16px;
                        letter-spacing: 1px;
                    }
                }

            }


            .confirm_time_shadow{
                display: flex;
                height: 48px;
                width: 100%;
                overflow: hidden;

                .confirm_time_change {
                    display: flex;
                    height: 48px;
                    width: 93%;
                    margin: 0 auto;
                    box-shadow: 0 0 8px #dedede;
                    justify-content: space-between;
                    background-color: white;
                    font-size: 15px;

                    .confirm_time_date {
                        display: flex;
                        height: 100%;
                        margin-left: 16px;
                        align-items: center;
                    }

                    .confirm_date_num {
                        display: flex;
                        height: 100%;
                        margin-right: 16px;
                        align-items: center;

                        a {
                            letter-spacing: 1px;
                        }
                    }
                }
            }

            .confirm_hotel_type{
                display: flex;
                height: 48px;
                width: 100%;
                overflow: hidden;

                .type_frame{
                    display: flex;
                    height: 100%;
                    width: 93%;
                    /*border-radius: 8px;*/
                    margin: 0 auto;
                    box-shadow: 0 0 8px #dedede;
                    background-color: white;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 15px;
                }
            }


            .confirm_note_shadow{
                display: flex;
                width: 100%;
                overflow: hidden;

                .confirm_note {
                    width: 93%;
                    margin: 0 auto;
                    padding: 8px 0;
                    box-shadow: 0 0 8px #dedede;
                    background-color: white;

                    .note_div {
                        width: 94%;
                        margin: auto;
                        border-radius: 10px;
                        padding: 10px 0;
                        background-color: rgba(255, 168, 87, 0.15);

                        .note_person {
                            display: flex;
                            height: 30px;
                            width: 90%;
                            margin: auto;
                            align-items: center;
                            color: #ffa857;
                            font-size: 19px;

                            a {
                                font-size: 15px;
                                margin: auto 10px;
                                color: #976334;
                            }
                        }

                        .note_remark{
                            display: flex;
                            width: 90%;
                            margin: auto;
                            align-items: flex-start;
                            color: #ffa857;
                            font-size: 19px;

                            .remark_icon{
                                display: flex;
                                height: 30px;
                                align-items: center;
                            }
                            .remark_word{
                                height: 60px;
                                width: 94%;
                                color: #976334;
                                margin: 5px 0 5px 10px;
                                font-size: 15px;
                                border-radius: 10px;
                                border: 1px dashed rgba(255, 168, 87, 0.76);
                            }
                        }
                    }
                }
            }


            .confirm_discount_shadow{
                display: flex;
                height: 60px;
                width: 100%;
                overflow: hidden;

                .confirm_discount{
                    display: flex;
                    height: 52px;
                    width: 93%;
                    margin: 0 auto;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom-left-radius: 12px;
                    border-bottom-right-radius: 12px;
                    box-shadow: 0 0 8px #dedede;
                    background-color: white;

                    a{
                        margin: auto 16px;
                        font-size: 15px;
                    }
                }
            }
        }
        .bottom_sure{
            position: fixed;
            display: flex;
            bottom: 0;
            height: 50px;
            width: 100%;
            justify-content: space-between;
            box-shadow: 0 0 8px #dedede;
            background-color: white;

            .sure_left{
                display: flex;
                height: 100%;
                align-items: center;
                a{
                    margin-left: 20px;
                    color: #ffa857;
                    font-size: 18px;
                    font-weight: bolder;
                }

            }
            .sure_detail{
                display: flex;
                height: 100%;
                width: 65px;
                margin: auto 0 auto auto;
                justify-content: center;
                align-items: center;
                color: #646464;
                font-size: 14px;
                a{
                    margin-right: 5px;
                }
            }
            .sure_button{
                display: flex;
                height: 100%;
                width: 120px;
                justify-content: center;
                align-items: center;
                background-color: #ffa857;
                color: white;
                font-weight: bolder;
            }
        }
    }
</style>