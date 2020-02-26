<template>
    <div class="order_bac" :style="sss">

        <div class="order_service">
            <van-icon name="service-o" />
        </div>
        <div class="order_tab">
            <van-tabs
                    v-model="tab_active"
                    animated
                    :border="false"
                    background="rgba(0,0,0,0)"
                    color="#ffa857"
                    title-active-color="#ffa857"
                    title-inactive-color="white"
            >
                <van-tab title="正在进行">

                    <div class="order_frame"
                         v-for="order in order_list"
                         :key="order.id"
                    >
                        <div class="order_state">
                            <a>{{order.state}}</a>
                            <span>¥ {{order.price}}</span>
                        </div>
                        <div class="order_line" />
                        <div class="order_note">
                            <a>{{order.hotel}}</a>
                        </div>
                        <div class="order_time">
                            <a>{{order.date.startMonth}}月{{order.date.startDay}}日-{{order.date.endMonth}}月{{order.date.endDay}}日
                                共{{order.night_num}}晚
                                {{order.type}}
                            </a>
                        </div>
                        <div class="order_reset">
                            <a>#测试#</a>
                        </div>
                    </div>

                </van-tab>

                <van-tab title="历史订单">
                    <div class="order_frame"
                         v-for="order in order_list"
                         :key="order.id"
                    >
                        <div class="order_state">
                            <a>{{order.state}}</a>
                            <span>¥ {{order.price}}</span>
                        </div>
                        <div class="order_line" />
                        <div class="order_note">
                            <a>{{order.hotel}}</a>
                        </div>
                        <div class="order_time">
                            <a>共{{order.night_num}}晚 {{order.type}}</a>
                        </div>
                    </div>
                </van-tab>

<!--                <van-tab title="全部订单">-->

<!--                </van-tab>-->

            </van-tabs>
        </div>

    </div>
</template>

<script>
    import {Icon, NavBar, Tab, Tabs} from 'vant';
    import order_bac_pic from '../../assets/order_bac.png'

    export default {
        components: {
            [NavBar.name]: NavBar,
            [Icon.name]: Icon,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
        },
        data(){
            return{
                tab_active: 0,  // 订单tab的浏览active
                sss:{
                    height:'',
                    background: "url('" + order_bac_pic + "') no-repeat center center fixed",
                    backgroundSize: "cover",
                },
                order_list:[]
            }
        },
        methods: {
            getHeight(){
                this.sss.height = window.innerHeight + 'px';
            },
            initData(order_data){
                // const order_show = [];
                order_data.map(
                    (item) => {
                        const editDate = new Date();
                        editDate.setTime(item.date.start);
                        item.date.startMonth = editDate.getMonth() + 1;
                        item.date.startDay = editDate.getDate();
                        editDate.setTime(item.date.end);
                        item.date.endMonth = editDate.getMonth() + 1;
                        item.date.endDay = editDate.getDate();
                        item.night_num = parseInt((item.date.end - item.date.start) / 86400000)
                    }
                );
                this.order_list = order_data;
                // console.log(this.order_list);
            }
        },
        async created(){
            await this.initData(this.$store.state.order_list);
            this.getHeight();

        },
        destroyed(){

        },
    };
</script>

<style lang="less">
    .order_bac{
        width: 100%;
        color: #323232;

        .order_service{
            display: flex;
            height: 10px;
            padding: 14px;
            flex-direction:row-reverse;
            font-size: 20px;
            color: white;
        }

        .order_tab{
            width: 100%;
            margin: auto;

            .order_frame{
                height: 140px;
                width: 90%;
                margin: 15px auto 15px auto;
                border-radius: 12px;
                animation: order_move 0.5s;
                animation-direction: alternate;
                background-color: rgba(255, 255, 255, 1);

                .order_state{
                    display: flex;
                    height: 34px;
                    /*width: 90%;*/
                    margin: auto;
                    padding: 4px 16px 0 16px;
                    justify-content: space-between;
                    align-items: center;
                    a{
                        font-size: 14px;
                        color: #faa357;
                    }
                    span{
                        color: #ffa857;
                        font-size: 16px;
                        font-weight: bolder;
                    }
                }
                .order_line{
                    height: 0;
                    width: 88%;
                    margin: auto;
                    border-bottom: 1px dashed rgba(255, 168, 87, 0.66);

                }
                .order_note{
                    margin: 10px auto 0 auto;
                    padding-left: 16px;

                    a{

                    }
                }
                .order_time{
                    margin: 5px auto;
                    padding-left: 16px;
                    font-size: 12px;
                    color: #646464;
                }
                .order_reset{
                    display: flex;
                    height: 26px;
                    width: 72px;
                    margin: 0 16px auto auto;
                    /*background-color: rgba(255, 168, 87, 0.76);*/
                    border-radius: 8px;
                    border: 1px solid rgba(255, 168, 87, 0.75);
                    font-size: 14px;
                    color: #faa357;
                    justify-content: center;
                    align-items: center;
                }



            }
        }


    }

    ::-webkit-scrollbar {
        width: 0 ;
    }

    /*进入 的动画效果*/
    @keyframes order_move {
        from {
            margin-top: 50px;
        }
        to {
            margin-top: 15px;
        }
    }
</style>