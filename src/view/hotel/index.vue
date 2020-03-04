<template>
    <div class="hotel_bac"
         :style="hotel"
    >

        <!--标题栏-->
        <van-sticky
                class="hotel_sticky"
                :z-index="80"
                :style="click_status && hotel_animate_o"
        >

            <van-nav-bar
                    :border="false"
                    @click-left="onClickLeft"
                    @click-right="onClickRight"
                    :z-index="80"
            >
                <div slot="left" v-if="!back_animate">
                    <van-icon name="arrow-left" size="22" color="#ffa857"/>
                </div>
                <div slot="title"
                     class="title_slot"
                     v-if="!back_animate"
                >
                    <van-field
                            class="title_search"
                            v-model="search_value"
                            placeholder="请输入关键词"
                    />
                </div>
                <div slot="right" v-if="!back_animate">
                    <van-icon name="location" size="22" color="#ffa857"/>
                </div>
            </van-nav-bar>

            <!--筛选框-->
            <van-dropdown-menu
                    active-color="#ffa857"
                    class="drop_down"
                    v-if="!back_animate"
            >
                <van-dropdown-item v-model="check_bank.sort.sort_value" :options="check_bank.sort.option"/>
                <van-dropdown-item v-model="check_bank.value.value_value" :options="check_bank.value.option"/>
                <van-dropdown-item v-model="check_bank.distance.distance_value" :options="check_bank.distance.option"/>

            </van-dropdown-menu>
        </van-sticky>


        <!--返回动画book的部分-->
        <fake-book v-if="back_animate" />


        <!--酒店框架*N-->
        <div class="hotel_answer"
             :style="hotel_ans"
             :class="back_animate && 'back_animate_css'"
        >
            <!--返回动画用按钮-->
            <div class="back_animate_button" v-if="back_animate">
                <a>搜 索</a>
            </div>
            <div style="height: 12px" :style="click_status && hotel_animate_o"/>

            <div class="hotel_hotel"
                 :ref="hotel.id"
                 v-for="(hotel,index) in hotel_list ? hotel_list : ''"
                 :key="hotel.id"
                 :style="[hotel.click && hotel_animate,click_status && (!hotel.click && hotel_animate_o)]"
                 @click="hotelClick(hotel.id, index, $event)"
            >
                <van-swipe
                        indicator-color="#ffa857"
                        :z-index="80"
                        class="swipe_frame"
                        v-show="!hotel.click"
                >
                    <van-swipe-item
                            class="hotel_swipe"
                            v-for="(hotelImg) in hotel.hotel_img"
                            :key="hotelImg"
                    >
                        <img :src="hotelImg" alt=""/>
                    </van-swipe-item>
                </van-swipe>

                <!--动画效果里作为替换的img-->
                <div class="swipe_curry" v-show="hotel.click">
                    <img :src="hotel.hotel_img[0]" alt=""/>
                </div>

                <!--酒店简介部分-->
                <div class="hotel_name" :style="hotel.click && 'font-size: 22px; height: 39px'">
                    {{hotel.hotel_name}}
                </div>
                <div class="hotel_detail">
                    <div class="detail_left">
                        <div class="hotel_frame">
                            <a style="color: #ffa857;font-size: 18px;font-weight: bolder">{{hotel.rate}}</a>
                            <a style="color: #ffa857">分</a>
                            <a style="margin-left: 7px">{{hotel.tag[0]}}</a>
                        </div>
                        <div class="hotel_frame">
                            <a>距离{{hotel.distance}} km | {{hotel.detail_position}}</a>
                        </div>
                        <div class="hotel_frame">
                            <van-icon name="like-o" size="12" color="#ffa857" style="font-weight: bolder"/>
                            <a style="margin: auto 10px auto 3px;">{{hotel.like}}</a>
                            <van-icon name="chat-o" size="12" color="#ffa857" style="font-weight: bolder"/>
                            <a style="margin: auto 10px auto 3px;">{{hotel.comment}}</a>
                        </div>
                    </div>
                    <div class="detail_price">
                        <a style="font-weight: bolder">¥</a>
                        <a style="font-size: 24px;font-weight: bolder">{{hotel.low_price}}</a>
                        <a style="font-size: 12px">起</a>
                    </div>
                </div>

                <!--动画效果下面骨架框-->
                <fake-detail v-show="hotel.click" />

            </div>

        </div>





    </div>
</template>

<script>
    import {Tabbar, Icon, Field, TabbarItem, NavBar, Sticky, DropdownMenu, DropdownItem, Swipe, SwipeItem} from 'vant';
    import fakeDetail from '../../component/fake_detail';
    import fakeBook from '../../component/fake_book'
    import book_bac from '../../assets/book_bac.png';

    export default {
        components: {
            fakeDetail,
            fakeBook,
            [NavBar.name]: NavBar,
            [Tabbar.name]: Tabbar,
            [Field.name]: Field,
            [Icon.name]: Icon,
            [TabbarItem.name]: TabbarItem,
            [Sticky.name]: Sticky,
            [DropdownMenu.name]: DropdownMenu,
            [DropdownItem.name]: DropdownItem,
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
        },
        data() {
            return {
                search_value: '',   // 搜素框里的东西
                local_animate: true,  // 是否展示动画效果 #测试用#


                back_animate: false, // 是否进入返回动画状态
                click_status: false,  // 是否进入click动画状态
                hotel_animate: {   // 用来更改click动画的
                    height: '',
                    width: '100%',
                    marginBottom: '0',
                    borderRadius: '0',
                },
                hotel_animate_o: {
                    height: '0',
                    margin: '0 auto',
                },
                hotel: {   // 全高
                    height: '',
                    background: "url('" + book_bac + "') no-repeat center center fixed",
                    backgroundSize: "cover"
                },
                hotel_ans: {   // 抛去上面部分的主体高度
                    height: '',
                },
                hotel_list: [],  // 酒店列表
                check_bank: {
                    sort: {  // 排序方式
                        sort_value: 0,
                        option: [
                            {text: '推荐排序', value: 0},
                            {text: '好评排序', value: 1},
                            {text: '销量排序', value: 2},

                        ]
                    },
                    value: {  // 价格
                        value_value: 0,
                        option: [
                            {text: '¥100以下', value: 0},
                            {text: '¥200-300', value: 1},
                            {text: '¥300-500', value: 2},
                            {text: '¥500以上', value: 3},
                        ]
                    },
                    distance: { // 距离
                        distance_value: 0,
                        option: [
                            {text: '1km 以内', value: 0},
                            {text: '1-3km', value: 1},
                            {text: '3-5km', value: 2},
                            {text: '5km以上', value: 3},
                        ]
                    }
                },

            }
        },

        methods: {
            hotelMap(HOTEL_LIST) {
                const listData = HOTEL_LIST;
                listData.map(
                    (item) =>{
                        item.click = false;
                    }
                );
                return listData
            },
            async getHeight() {
                this.hotel_list = await this.hotelMap(this.$store.state.data_hotel_list);
                localStorage.getItem('animate_show') === 'true'
                    ? this.local_animate = true : this.local_animate = false;
                this.hotel.height = window.innerHeight + 'px';
                this.hotel_animate.height = window.innerHeight + 'px';
                this.hotel_ans.height = window.innerHeight - 81 + 'px';
            },
            onClickLeft() {
                this.$store.state.page_change_status = 'back';
                if(this.local_animate){
                    this.back_animate = true;
                    this.hotel_ans.height = '48px';
                    setTimeout(() => {
                        this.$router.go(-1)
                    }, 400)
                } else {
                    this.$router.go(-1)
                }
            },
            onClickRight() {
                console.log('地图');
            },
            clickAnimate(hotel_id, index, ref) {
                this.click_status = true;
                this.hotel_list[index].click = true;
                this.hotel_ans.height = this.hotel.height;

                console.log('click', hotel_id, index, ref);
                setTimeout(() => {
                    this.$router.push('detail')
                }, 400)
            },

            async hotelClick(hotel_id, index, ref) {
                this.local_animate ? await this.clickAnimate(hotel_id, index, ref)
                    : await this.$router.push('detail');
            }
        },


        created() {
            this.getHeight();
        },
        destroyed() {

        },
    };
</script>

<style lang="less">
    .hotel_bac {
        width: 100%;
        overflow: hidden;
        user-select: none;

        .hotel_sticky {
            height: 81px;
            transition: height 300ms;
            overflow: hidden;
        }

        .drop_down {
            height: 36px;
            margin-top: -1px
        }

        .title_slot {
            display: flex;
            height: 26px;
            border-radius: 200px;
            margin-top: 11px;
            overflow: hidden;
        }

        .title_search {
            height: 28px;
            margin: auto;
            padding: 2px 16px;
            background-color: rgba(255, 168, 87, 0.2);
        }
        ::placeholder{
            color: #ec9d4f;
            font-size: 13px;
        }


        .hotel_answer {
            width: 100%;
            background-color: #f5f5f5;
            overflow: auto;

            .back_animate_button{
                display: flex;
                height: 48px;
                width: 91%;
                margin: 0 auto;
                border-radius: 12px;
                justify-content: center;
                align-items: center;
                background-color: #ffa857;
                font-size: 18px;
                color: white;
            }

            .hotel_hotel {
                height: 240px;
                width: 91%;
                margin: 0 auto 12px auto;
                border-radius: 12px;
                box-shadow: 0 0 8px #dedede;
                background-color: white;
                transition: margin 400ms, width 400ms, height 400ms, border-radius 400ms;
                overflow: hidden;

                .swipe_frame {
                    height: 140px;
                    transition: height 400ms;

                    .hotel_swipe {
                        display: flex;
                        width: 100%;
                        justify-content: center;
                        align-items: center;

                        img {
                            width: 100%;
                        }
                    }

                }

                .swipe_curry {
                    display: flex;
                    height: 200px;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;

                    img {
                        width: 100%;
                    }
                }

                .hotel_name {
                    display: flex;
                    height: 32px;
                    width: 92%;
                    margin: auto;
                    padding-top: 5px;
                    align-items: center;
                    color: #323232;
                    font-size: 18px;
                    font-weight: bolder;
                    transition: font-size 400ms, height 400ms;
                }

                .hotel_detail {
                    display: flex;
                    height: 60px;
                    width: 92%;
                    margin: auto;

                    .detail_left {
                        display: block;
                        height: 60px;
                        width: 75%;
                        margin: auto;

                        .hotel_frame {
                            display: flex;
                            height: 18px;
                            width: 100%;
                            align-items: center;
                            font-size: 12px;
                            color: #505050;
                        }

                    }

                    .detail_price {
                        display: block;
                        height: 40px;
                        width: 25%;
                        margin: 10px auto;
                        text-align: right;
                        color: #ffa857;
                    }

                }


            }

        }

        .back_animate_css{
            position: absolute;
            top: 395px;
            height: 48px;
            width: 100%;
            margin: auto;
            overflow: hidden;
            background-color: rgba(0,0,0,0);
            animation: back_move 0.4s;
            animation-direction: alternate;
            -webkit-animation-direction: alternate;
        }

        .hotel_answer::-webkit-scrollbar {
            width: 0;
        }

    }



    /*返回 的动画效果*/
    @keyframes back_move {
        from {
            top: 0;
            height: 100%;
        }
        to {
            top: 395px;
            height: 48px;
        }
    }

</style>