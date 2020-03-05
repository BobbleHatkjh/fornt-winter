<template>
    <div class="detail_bac" :style="detail">

        <!--标题栏-->
        <van-sticky>
            <van-nav-bar
                    style="background-color: rgba(0,0,0,0)"
                    :border="false"
                    @click-left="onClickLeft"
                    @click-right="onClickRight"
                    :z-index="89"
            >
                <div slot="left" v-if="!back_animate">
                    <van-icon name="arrow-left" size="22" color="#ffa857"/>
                </div>
                <div slot="right" v-if="!back_animate">
                    <van-icon name="share" size="22" color="#ffa857"/>
                </div>
            </van-nav-bar>
        </van-sticky>


        <!--fake hotel-->
        <fake-hotel v-if="back_animate" style="margin-top: -46px" :style="detail"/>

        <!--主体框-->
        <div class="detail_scroll"
             :style="detail_frame"
             :class="back_animate && 'detail_scroll_animate'"
        >

            <!--图片轮播-->
            <van-swipe
                    class="detail_swipe_frame"
                    indicator-color="#ffa857"
            >
                <van-swipe-item class="detail_swipe" v-for="hotelImg in hotel_info.hotel_img" :key="hotelImg">
                    <img :src="hotelImg" alt=""/>
                </van-swipe-item>
            </van-swipe>

            <!--字体缩小触发器-->
            <van-sticky :offset-top="46" :z-index="80" @scroll="nameScroll"/>

            <!--酒店名字/喜欢，吸顶-->
            <van-sticky :z-index="80">
                <div class="detail_name_frame">
                    <a :style="top_sticky && title_animate">{{hotel_info.hotel_name}}</a>
                    <div class="detail_name_frame_like"
                         :style="top_sticky && like_animate"
                         @click="likeHotel"
                    >
                        <van-icon name="like-o" v-show="!this.hotel_like"/>
                        <van-icon name="like" v-show="this.hotel_like"/>
                    </div>
                </div>
            </van-sticky>

            <div class="detail_hotel_note">
                <a v-for="tag in hotel_info.tag" :key="tag">
                    {{tag}}
                </a>

            </div>

            <div class="detail_rate" :style="back_animate && 'border: none'">
                <div class="rate_num">
                    <a>{{hotel_info.rate}}</a>
                </div>
                <div class="rate_note">
                    <div class="rate_icon">
                        <van-rate
                                v-model="hotel_info.rate"
                                readonly
                                allow-half
                                size="12"
                                gutter="2px"
                                void-color="#ffa857"
                                color="#ffa857"
                        />
                    </div>
                    <div class="rate_word">
                        {{hotel_info.like}}人喜欢
                    </div>
                </div>
                <div class="rate_map">
                    <van-icon name="location-o"/>
                </div>
                <div class="rate_phone">
                    <van-icon name="phone-o"/>
                </div>
            </div>


            <!--重选日期-->
            <div class="detail_time_change"
                 @click="detail_date = true"
                 v-if="!back_animate"
            >
                <div class="detail_time_date">
                    <van-icon name="notes-o" size="20" color="#ffa857" style="margin-right: 6px"/>
                    <a>{{date_chose.in.month}}月{{date_chose.in.date}}日 </a>
                    <van-icon name="arrow" size="18" color="#ffa857"/>
                    <a>{{date_chose.out.month}}月{{date_chose.out.date}}日</a>
                </div>
                <div class="detail_date_num">
                    <a>共{{date_chose.date_num}}晚</a>
                </div>
            </div>


            <!--房间类型-->
            <div class="detail_type" v-if="!back_animate">
                <div class="detail_type_div"
                     v-for="type in hotel_info.type_list ? hotel_info.type_list : ''"
                     :key="type.type_name"
                     :style="type.select && 'backgroundColor: rgba(255, 168, 87, 0.2)'"
                >
                    <button-animate
                            :div_style="'detail_type_frame'"
                            :animate_style="'touch_bac'"
                            @click="type.select = !type.select"
                    >
                        <div class="type_frame_img">
                            <img :src="type.type_img[0]" alt=""/>
                        </div>
                        <div class="type_frame_word">
                            <div class="type_frame_word_note">
                                <a>{{type.type_name}}</a>
                                <a style="font-size: 13px;color: #696969">{{type.type_note}}</a>
                            </div>
                        </div>
                        <div class="type_frame_price">
                            <div class="type_frame_price_note">
                                <a>¥<a style="font-size: 22px;font-weight: bolder">{{type.low_price}}</a>起</a>
                            </div>
                        </div>
                    </button-animate>
                    <div class="type_select_frame" :style="type.select && 'marginBottom: 10px'">
                        <div class="type_select_div"
                             v-for="room in type.room_list"
                             :key="room.name"
                             :style="type.select && 'height: 70px'"
                        >
                            <div class="type_select_out_div">
                                <div class="type_select_note">
                                    {{room.name}}
                                </div>
                                <div class="type_select_price">
                                    ¥ {{room.price}}
                                </div>
                                <div class="type_select_button" @click="type_select(room.id,$event)">
                                    <a>预定</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!--评论，酒店介绍-->
            <comment v-if="!back_animate"/>

        </div>

        <!--预定动画-->
        <div class="detail_animate_out"
             v-if="click_state"
             :style="detail"
        >
            <div class="animate_div" :style="click_animate" >
                <a>处理中</a>
            </div>
        </div>

        <!--日期选择-->
        <van-calendar
                v-model="detail_date"
                type="range"
                confirm-text="确定"
                @confirm="onConfirm"
                color="#f4a054"
        />


    </div>
</template>

<script>
    import {Tabbar, TabbarItem, NavBar, Icon, Swipe, SwipeItem, Sticky, Rate, Calendar, Tab, Tabs} from 'vant';
    import buttonAnimate from '../../component/animate_button/index.vue'
    import fakeHotel from '../../component/fake_hotel/index';
    import comment from '../../component/comment'

    export default {
        components: {
            buttonAnimate,
            comment,
            fakeHotel,
            [NavBar.name]: NavBar,
            [Tabbar.name]: Tabbar,
            [Icon.name]: Icon,
            [TabbarItem.name]: TabbarItem,
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [Sticky.name]: Sticky,
            [Rate.name]: Rate,
            [Calendar.name]: Calendar,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
        },
        data() {
            return {
                local_animate: true,  // 是否展示动画效果 #测试用#
                back_animate: false,  // 是否开启返回动画
                click_state: false,  // 是否进入点击动画
                top_sticky: false,  // 是否吸顶
                hotel_like: false,  // 是否喜欢酒店
                detail_date: false,  // 是否调出日期选择器
                detail_active: 0,  //评论和酒店介绍切换

                date_chose: {},  // 选择的日期

                hotel_info: {},  // 酒店信息

                title_animate: {
                    marginLeft: '50px',
                    fontSize: '18px'
                },
                like_animate: {
                    margin: '0 40px 0 auto'
                },
                click_animate:{
                    top: '',
                    left: '',
                },



                detail: {
                    height: '',
                },
                detail_frame: {
                    height: '',
                }

            }
        },
        methods: {
            detailMap(HOTEL_INFO) {

                const newHotel = HOTEL_INFO;
                const changeType = [];
                HOTEL_INFO.type_list.map(
                    (item) => {
                        const newType = {};
                        newType.select = false;
                        newType.type_img = item.type_img;
                        newType.type_name = item.type_name;
                        newType.type_note = item.type_note;
                        newType.low_price = item.low_price;
                        newType.room_list = item.room_list;
                        changeType.push(newType)
                    }
                );
                newHotel.type_list = changeType;
                return newHotel
            },
            async getHeight() {
                this.date_chose = this.$store.state.date_origin;
                this.hotel_info = await this.detailMap(this.$store.state.data_hotel_info);
                this.detail.height = window.innerHeight + 'px';
                this.detail_frame.height = window.innerHeight + 'px';
            },
            onClickLeft() {
                if (this.local_animate) {
                    this.back_animate = true;
                    this.detail_frame.height = '313px';
                    setTimeout(() => {
                        this.$router.go(-1)
                    }, 700)
                } else {
                    this.$router.go(-1)
                }

            },
            onClickRight() {
                console.log('分享');
            },


            nameScroll(event) { // 吸顶的钩子，距顶部154px
                if (this.top_sticky !== true || event.isFixed === false) {
                    this.top_sticky = event.isFixed;  // 是否吸顶
                }
            },
            likeHotel() {  // 添加喜欢
                if (this.hotel_like === true) {
                    console.log('取消了喜欢');
                    this.hotel_like = false
                } else {
                    console.log('添加了喜欢');
                    this.hotel_like = true
                }
            },
            type_select(id, e) {   // 进入确认订单页面
                let click_ = {
                    top: '',
                    left: ''
                };
                if (e.target.tagName === "A") {
                    console.log(e.path[1].getBoundingClientRect());
                    click_.top = e.path[1].getBoundingClientRect().top + 'px';
                    click_.left = e.path[1].getBoundingClientRect().left + 'px';
                } else {
                    console.log(e.target.getBoundingClientRect());
                    click_.top = e.target.getBoundingClientRect().top + 'px';
                    click_.left = e.target.getBoundingClientRect().left + 'px';
                }
                this.click_animate = click_;
                console.log(this.click_animate);
                this.click_state = true;
                setTimeout(() => {
                    this.$router.push('confirm')
                }, 700)
            },


            formatDate(date) {
                return {
                    unicodeTime: Date.parse(date),
                    jsTime: date,
                    month: date.getMonth() + 1,
                    date: date.getDate(),
                    week: "日一二三四五六".charAt(date.getDay())
                };
            },
            onConfirm(date) {
                const [start, end] = date;
                this.date_chose.in = this.formatDate(start);
                this.date_chose.out = this.formatDate(end);
                this.date_chose.date_num = (end - start) / 3600 / 24000;
                this.detail_date = false;

                console.log(this.date_chose);
            },

        },

        created() {

            this.getHeight();
            localStorage.getItem('animate_show') === 'true'
                ? this.local_animate = true : this.local_animate = false;
        },
        destroyed() {

        },
    };
</script>

<style lang="less">
    .touch_bac {
        background-color: rgba(215, 142, 73, 0.15);
    }

    .detail_bac {
        width: 100%;
        color: #323232;
        user-select: none;

        .detail_scroll {
            width: 100%;
            margin-top: -46px;
            transition: height 400ms, top 400ms;
            overflow: auto;

            .detail_swipe_frame {
                height: 200px;
                background-color: white;

                .detail_swipe {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;

                    img {
                        width: 100%;
                    }
                }
            }

            .detail_name_frame {
                display: flex;
                height: 48px;
                width: 100%;
                align-items: center;
                font-size: 22px;
                font-weight: bolder;
                background-color: white;

                a {
                    margin-left: 16px;
                    transition: margin-left 300ms, font-size 300ms;
                }

                .detail_name_frame_like {
                    display: flex;
                    height: 100%;
                    width: 40px;
                    margin: 0 4px 0 auto;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    color: #ffa857;
                    transition: margin 300ms;
                }
            }

            .detail_hotel_note {
                height: 20px;
                width: 100%;
                background-color: white;

                a {
                    color: #646464;
                    font-size: 12px;
                }

                a:first-child {
                    margin-left: 6px;
                }

                a:before {
                    content: '· ';
                    margin-left: 10px;
                    font-weight: bolder;
                }
            }

            .detail_rate {
                display: flex;
                height: 40px;
                width: 100%;
                padding-bottom: 5px;
                align-items: center;
                border-bottom: 5px solid #dedede;
                border-image: linear-gradient(to bottom, #e6e6e6, #f5f5f5) 60 0;
                background-color: white;

                .rate_num {
                    display: flex;
                    height: 100%;
                    margin-left: 16px;
                    align-items: flex-end;
                    color: #ffa857;
                    line-height: 34px;
                    font-size: 28px;
                    font-weight: bolder;
                }

                .rate_note {
                    display: block;
                    height: 100%;
                    margin-left: 10px;
                    font-size: 12px;

                    .rate_icon {
                        display: flex;
                        height: 50%;
                        justify-content: left;
                        align-items: flex-end;
                    }

                    .rate_word {
                        display: flex;
                        height: 50%;
                        justify-content: left;
                        align-items: flex-start;
                        color: #696969;
                    }
                }

                .rate_map {
                    display: flex;
                    height: 60%;
                    width: 43px;
                    margin: auto 0 auto auto;
                    justify-content: center;
                    align-items: center;
                    border-right: 1px solid rgba(255, 168, 87, 0.65);
                    font-size: 20px;
                }

                .rate_phone {
                    display: flex;
                    height: 100%;
                    width: 36px;
                    margin: 0 12px 0 0;
                    flex-direction: row-reverse;
                    align-items: center;
                    color: #323232;
                    font-size: 24px;
                }
            }


            .detail_time_change {
                display: flex;
                height: 48px;
                width: 93%;
                margin: 10px auto 0 auto;
                box-shadow: 0 0 8px #dedede;
                border-radius: 12px;
                justify-content: space-between;
                background-color: white;
                overflow: hidden;
                font-size: 14px;

                .detail_time_date {
                    display: flex;
                    height: 100%;
                    margin-left: 16px;
                    align-items: center;
                }

                .detail_date_num {
                    display: flex;
                    height: 100%;
                    margin-right: 16px;
                    align-items: center;

                    a {
                        letter-spacing: 1px;
                    }
                }
            }

            .detail_type {
                width: 93%;
                margin: 14px auto 0 auto;
                border-radius: 12px;
                box-shadow: 0 0 8px #dedede;
                background-color: white;
                overflow: hidden;

                .detail_type_div {
                    display: block;
                    height: 100%;
                    width: 100%;
                    overflow: hidden;

                    .detail_type_frame {
                        display: flex;
                        height: 100px;
                        width: 100%;
                        align-items: center;

                        .type_frame_img {
                            display: flex;
                            height: 80px;
                            width: 80px;
                            margin-left: 10px;
                            border-radius: 10px;
                            justify-content: center;
                            align-items: center;
                            background-color: rgba(255, 168, 87, 0.7);
                            overflow: hidden;

                            img {
                                height: 100%
                            }
                        }

                        .type_frame_word {
                            display: flex;
                            height: 80px;
                            margin-left: 7px;
                            align-items: center;

                            .type_frame_word_note {
                                display: flex;
                                flex-direction: column;

                                a {
                                    font-size: 15px;
                                }
                            }
                        }

                        .type_frame_price {
                            display: flex;
                            height: 100%;
                            margin: auto 10px auto auto;
                            align-items: center;

                            .type_frame_price_note {
                                display: flex;
                                flex-direction: column;

                                a {
                                    font-size: 14px;
                                    color: #ffa857;
                                }
                            }
                        }

                    }

                    .type_select_frame {
                        height: 100%;
                        width: 93%;
                        margin: 0 auto;
                        border-radius: 10px;
                        background-color: white;
                        transition: margin-bottom 300ms;
                        overflow: hidden;

                        .type_select_div {
                            display: flex;
                            height: 0;
                            width: 100%;
                            transition: height 300ms;
                            overflow: hidden;

                            .type_select_out_div {
                                display: flex;
                                height: 70px;
                                width: 100%;
                                align-items: center;
                                overflow: hidden;

                                .type_select_note {
                                    font-size: 14px;
                                    margin: auto auto auto 18px;
                                }

                                .type_select_price {
                                    margin: auto 0 auto auto;
                                    font-weight: bolder;
                                    color: #ffa857;
                                }

                                .type_select_button {
                                    display: flex;
                                    height: 46px;
                                    width: 46px;
                                    margin: auto 12px;
                                    justify-content: center;
                                    align-items: center;
                                    border-radius: 8px;
                                    font-size: 15px;
                                    color: white;
                                    font-weight: bolder;
                                    background-color: #ffa857;
                                }
                            }

                        }
                    }

                }

            }


        }

        .detail_scroll_animate {
            position: absolute;
            top: -315px;
            height: 200px;
            width: 91%;
            margin: auto 4.5%;
            border-radius: 12px;
            box-shadow: 0 0 8px #dcdcdc;
            animation: detail_back_move 0.7s;
            animation-direction: alternate;

        }

        .detail_animate_out{
            position: absolute;
            top: 0;
            z-index: 95;
            width: 100%;

            .animate_div{
                position: absolute;
                display: flex;
                top: 0;
                left: 0;
                width: 46px;
                height: 46px;
                justify-content: center;
                align-items: center;
                color: white;
                font-weight: bolder;
                background-color: #ffa857;
                animation: detail_click 0.8s;
                animation-direction: alternate;
            }
        }

        .detail_scroll::-webkit-scrollbar {
            width: 0;
        }


    }

    /*title 的动画效果*/
    @keyframes title_move {
        from {
            margin-left: 16px;
        }
        to {
            margin-left: 50px;
        }
    }

    /*返回的动画效果*/
    @keyframes detail_back_move {
        0% {
            top: 0;
            width: 100%;
            margin: auto 0;
        }
        60% {
            top: 140px;
            width: 91%;
            margin: auto 4.5%;
        }
        100% {
            top: -315px;
        }
    }

    /*返回的动画效果*/
    @keyframes detail_click {
        0% {
            height: 46px;
            width: 46px;
        }
        60% {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
        100% {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
        }
    }
</style>