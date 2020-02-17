<template>
    <div class="book" :style="bac_obj">

        <!--标题栏-->
        <van-nav-bar
                title="预定信息"
                style="color: #323232"
                @click-left="onClickLeft"
                :z-index="90"
        >
            <div slot="left">
                <van-icon name="arrow-left" size="22" color="#ffa857"/>
            </div>
        </van-nav-bar>

        <div class="book_bac">
            <div style="height: 10px"></div>

            <!--地址选项框-->
            <div class="my_position"
                 :class="local_animate && 'my_p_a_1'"
            >
                <div class="my_position_left">
                    <a>广阳区万新小区B区</a>
                </div>
                <div class="my_position_right">
                    <van-icon class="my_position_icon" name="arrow" size="22"/>
                </div>
            </div>

            <!--时间选项框-->
            <div class="book_date">
                <div class="date_chose" @click="show_date = true">
                    <div class="date_chose_m_w">
                        <div class="date_chose_m_w_div">
                            <a>{{date_chose.in.month}}月</a>
                        </div>
                        <div class="date_chose_m_w_div">
                            <a>周{{date_chose.in.week}}</a>
                        </div>
                    </div>
                    <div class="date_chose_date">
                        <a>{{date_chose.in.date}}</a>
                    </div>
                </div>

                <div class="date_mid">
                    <div class="date_mid_arrow">
                        <van-icon class="mid_arrow" name="arrow" color="#e9a063" size="48"/>
                    </div>
                </div>

                <div class="date_chose" @click="show_date = true">
                    <div class="date_chose_m_w">
                        <div class="date_chose_m_w_div">
                            <a>{{date_chose.out.month}}月</a>
                        </div>
                        <div class="date_chose_m_w_div">
                            <a>周{{date_chose.out.week}}</a>
                        </div>
                    </div>
                    <div class="date_chose_date">
                        <a>{{date_chose.out.date}}</a>
                    </div>
                </div>
            </div>


            <!--酒店选项-->
            <div class="my_position"
                 :class="local_animate && 'my_p_a_2'"
                 @click="showPop('hotel')"
            >
                <div class="my_position_left">
                    <a>搜索您偏好的酒店</a>
                </div>
                <div class="my_position_right">
                    <van-icon class="my_position_icon" name="arrow" size="22"/>
                </div>
            </div>


            <!--价格选项-->
            <div class="my_position"
                 style="margin-top: 15px"
                 :class="local_animate && 'my_p_a_3'"
                 @click="showPop('price')"
            >
                <div class="my_position_left">
                    <a>筛选您倾向的价格</a>
                </div>
                <div class="my_position_right">
                    <van-icon class="my_position_icon" name="arrow" size="22"/>
                </div>
            </div>


            <!--搜索按钮-->
            <div class="search_button"
                 @click="button_book"
                 :class="[search_animate && 'button_animate',local_animate && 'my_p_a_4']"
            >
                <a v-show="!search_animate">搜 索</a>

                <!--点击搜索按钮的额外动画-->
                <fake-hotel v-show="search_animate" />
            </div>


            <!--下方的拉起框-->
            <div class="book_pull" :class="local_animate && 'pull_animate'">
                <div class="pull_icon">
                    <van-icon name="arrow-up" />
                </div>
                <div class="pull_frame">
                    <van-tabs v-model="view_active" animated color="#ffa857" title-active-color="#ffa857">
                        <van-tab title="我的喜欢">内容 1</van-tab>
                        <van-tab title="住过">内容 2</van-tab>
                    </van-tabs>
                </div>

            </div>

        </div>


        <!--日期选择-->
        <van-calendar
                v-model="show_date"
                type="range"
                confirm-text="确定"
                @confirm="onConfirm"
                color="#f4a054"
        />

        <!--弹出层 酒店-->
        <van-popup
                v-model="show_pop_hotel"
                position="bottom"
                style="height: 500px"
        >
            <div>
                <van-sidebar v-model="active_hotel" class="van-sidebar-item--select">
                    <van-sidebar-item title="热门" />
                    <van-sidebar-item title="经济连锁" />
                    <van-sidebar-item title="高端连锁" />
                    <van-sidebar-item title="商务出行" />
                    <van-sidebar-item title="主题酒店" />
                    <van-sidebar-item title="12313" />
                </van-sidebar>
            </div>
            <div class="slider_hotel_button_frame">
                <a>清空已选</a>
            </div>
        </van-popup>


        <!--弹出层 价格-->
        <van-popup
                v-model="show_price"
                position="bottom"
                style="height: 130px"
        >
            <div class="pop_price_div">
                <van-slider
                        bar-height="4px"
                        active-color="#ffa857"
                        v-model="slider_value"
                        :step="20"
                        @change="priceChange"
                />
            </div>
            <div class="pop_price_word">
                <a>¥ 0</a>
                <a>¥ 1000以上</a>
            </div>
            <div class="pop_price_price">
                <a>价格
                    <span style="">¥ 0~500</span>
                </a>
            </div>
        </van-popup>

    </div>
</template>


<script>
    import {Row, Col, Icon, Cell, CellGroup, Calendar, NavBar, Area, Popup, Slider, Sidebar, SidebarItem, Tab, Tabs} from 'vant';
    import fakeHotel from '../../component/fake_hotel/index.vue';
    import book_bac from '../../assets/book_bac.png';

    export default {
        components: {
            fakeHotel,
            [Row.name]: Row,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Cell.name]: Cell,
            [Calendar.name]: Calendar,
            [CellGroup.name]: CellGroup,
            [Area.name]: Area,
            [NavBar.name]: NavBar,
            [Popup.name]: Popup,
            [Slider.name]: Slider,
            [Sidebar.name]: Sidebar,
            [SidebarItem.name]: SidebarItem,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
        },
        data() {
            return {
                local_animate: true,  // 是否展示动画效果 #测试用#
                search_animate: false, // 是否进入搜索按钮动画

                show_date: false, // 是否调出日期选择器
                show_pop_hotel: false,  // 是否弹出酒店选择
                show_price: false, // 是否调出价格选择
                active_hotel: 0,  // 侧边栏显示active
                view_active: 0,  // 下方的浏览active

                date_chose: {},  // 选择的日期
                slider_value: 50, // 价格选择器
                bac_obj: {
                    height: '',
                    background: "url('" + book_bac + "') no-repeat center center fixed",
                    backgroundSize: "cover"
                }
            }
        },



        methods: {
            getHeight() {
                (localStorage.getItem('animate_show') === 'true' && this.$store.state.page_change_status === 'next')
                    ? this.local_animate = true
                    : this.local_animate = false;
                console.log(localStorage.getItem('animate_show'),this.$store.state.page_change_status,this.local_animate);
                this.bac_obj.height = window.innerHeight + 'px';
                this.date_chose = this.$store.state.date_origin;
            },
            onClickLeft() {
                this.$store.state.page_change_status = 'back';
                this.$router.go(-1)
            },
            button_book() {  // 点击搜索按钮
                if (localStorage.getItem('animate_show') === 'true') {
                    this.search_animate = true;
                    setTimeout(() => {
                        this.$router.push('hotel')
                    }, 400)
                } else {
                    this.$router.push('hotel');
                }
            },



            formatDate(date) {
                return {
                    month: date.getMonth() + 1,
                    date: date.getDate(),
                    week: "日一二三四五六".charAt(date.getDay())
                };
            },
            onConfirm(date) {
                const [start, end] = date;
                this.show_date = false;

                this.date_chose.in = this.formatDate(start);
                this.date_chose.out = this.formatDate(end);

            },
            showPop(what) {  // 弹出层
                switch (what) {
                    case 'price':
                        this.show_price = true;
                        break;
                    case 'hotel':
                        this.show_pop_hotel = true;
                        break;
                }
            },
            priceChange(value){
                console.log(value);
            }
        },

        async created() {
            this.getHeight();
            // this.daDa(this.$store.state.lab_select,this.$store.state.lab_num);

        },
        destroyed() {

        },
    };
</script>

<style lang="less">
    .book{
        width: 100%;
        user-select: none;

        .book_bac {
            width: 100%;
            color: #ffa857;

            .my_p_a_1 {
                animation: frame_move 0.5s;
            }

            .my_p_a_2 {
                animation: frame_move 0.7s;
            }

            .my_p_a_3 {
                animation: frame_move 0.9s;
            }

            .my_p_a_4 {
                animation: frame_move 1.1s;
            }

            .my_position {
                display: flex;
                height: 48px;
                width: 91%;
                margin: 12px 4.5%;
                border-radius: 12px;
                justify-content: center;
                animation-direction: alternate;
                -webkit-animation-direction: alternate;
                box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
                background-color: white;

                .my_position_left {
                    display: flex;
                    height: 100%;
                    width: 70%;

                    a {
                        color: #f59e57;
                        margin: auto 0;
                        font-size: 15px;
                    }
                }

                .my_position_right {
                    display: flex;
                    height: 100%;
                    width: 20%;

                    .my_position_icon {
                        margin: auto 0 auto auto;
                    }
                }
            }

            .book_date {
                display: flex;
                width: 91%;
                margin: 17px auto 15px auto;
                justify-content: space-between;

                .date_chose {
                    display: block;
                    height: 130px;
                    width: 40%;
                    border-radius: 12px;
                    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
                    background-color: white;

                    .date_chose_m_w {
                        display: flex;
                        height: 24%;
                        width: 75%;
                        padding: 0 3%;
                        margin: 7% auto 0 auto;
                        border-bottom: 1px solid #f59e57;
                        justify-content: space-between;

                        .date_chose_m_w_div {
                            font-size: 17px;
                            font-weight: 500;
                        }
                    }

                    .date_chose_date {
                        display: flex;
                        height: 60%;
                        width: 81%;
                        margin: 3px auto auto auto;

                        a {
                            font-weight: bolder;
                            font-size: 62px;
                            margin: auto;
                        }
                    }

                }

                .date_mid {
                    display: block;
                    height: 130px;
                    width: 15%;

                    .date_mid_arrow {
                        display: flex;
                        height: 130px;
                        width: 100%;

                        .mid_arrow {
                            margin: auto;
                        }
                    }
                }
            }

            .search_button {
                display: flex;
                height: 48px;
                width: 91%;
                margin: 15px 4.5%;
                border-radius: 12px;
                background-color: #ffa857;
                box-shadow: 0 0 8px rgba(255, 168, 87, 0.5);
                overflow: hidden;

                a {
                    font-size: 20px;
                    color: white;
                    font-weight: 700;
                    margin: auto;
                }

            }

            .book_pull{
                position: fixed;
                display: block;
                bottom: 0;
                height: 70px;
                width: 100%;
                text-align: center;
                z-index: 90;
                overflow: hidden;

                .pull_icon{
                    display: flex;
                    height: 30px;
                    width: 80%;
                    margin: 0 auto;
                    justify-content: center;
                    align-items: center;
                    font-size: 22px;
                }
                .pull_frame{
                    height: 100%;
                    width: 91%;
                    margin: auto;
                    border-top-left-radius: 12px;
                    border-top-right-radius: 12px;
                    background-color: white;
                    overflow: hidden;
                }
            }
            .pull_animate{
                animation: pull_move 0.6s;
                animation-direction: alternate;
                -webkit-animation-direction: alternate;
            }


            .button_animate {
                position: absolute;
                z-index: 99;
                top: 0;
                height: 100%;
                width: 100%;
                margin: 0;
                border-radius: 0;
                background-color: #f5f5f5;
                animation: button_move 0.4s;
                animation-direction: alternate;
                -webkit-animation-direction: alternate;
            }


        }





        .van-sidebar-item--select{
            color: #ffa857;
            border-color: #ffa857;
        }
        .slider_hotel_button_frame{
            position: fixed;
            display: flex;
            bottom: 0;
            height: 50px;
            width: 100%;
            justify-content: center;
            align-items: center;
            background-color: #ffa857;

            a{
                color: white;
                font-weight: bolder;
            }
        }





        .pop_price_div{
            height: 20px;
            width: 85%;
            margin: auto;
            padding-top: 25px;
        }
        .pop_price_word{
            display: flex;
            height: 16px;
            width: 90%;
            margin: auto;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            color: #696969;
        }
        .pop_price_price{
            height: 25px;
            width: 90%;
            margin: 15px auto 0 auto;
            font-size: 16px;
            color: #323232;

            span{
                color: #ffa857;
                font-size: 17px;
                font-weight: bolder;
                margin-left: 5px
            }
        }
    }



    /*进入页面时的动画效果*/
    @keyframes frame_move {
        from {
            width: 55%;
        }
        to {
            width: 91%;
        }
    }

    /*进入页面下方拉起框 的动画效果*/
    @keyframes pull_move {
        from {
            height: 0
        }
        to {
            height: 70px;
        }
    }

    /*按钮点击后 搜素按钮 的动画效果*/
    @keyframes button_move {
        from {
            top: 389px;
            height: 48px;
            width: 91%;
            margin: 15px 4.5%;
            border-radius: 12px;
            background-color: #ffa857;
        }
        to {
            top: 0;
            height: 100%;
            width: 100%;
            margin: 0;
            border-radius: 0;
            background-color: #f5f5f5;
        }
    }

</style>
