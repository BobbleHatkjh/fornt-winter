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
                    </div>

                </van-tab>

                <van-tab title="历史订单">内容 2</van-tab>
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
                order_list:[
                    {
                        id: 10969,
                        state: '待入住',
                        hotel: '汉庭西青大学城店',
                        date: {
                            start: '2/2',
                            end: ''
                        },
                        night_num: 2,
                        price: '207',
                        type: '精品大床房'
                    },
                    {
                        id: 10970,
                        state: '入住中',
                        hotel: '汉庭滨江道店',
                        date: '',
                        night_num: 1,
                        price: '267',
                        type: '精品大床房'
                    },
                    {
                        id: 10971,
                        state: '未付款',
                        hotel: '汉庭滨江道店',
                        date: '',
                        night_num: 1,
                        price: '267',
                        type: '精品大床房'
                    }
                ]
            }
        },
        methods: {
            getHeight(){
                this.sss.height = window.innerHeight + 'px';
            },
        },
        async created(){
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
            padding: 12px;
            flex-direction:row-reverse;
            font-size: 20px;
            color: white;
        }

        .order_tab{
            width: 90%;
            margin: auto;

            .order_frame{
                height: 140px;
                width: 100%;
                margin: 15px auto;
                border-radius: 12px;
                animation: order_move 0.5s;
                animation-direction: alternate;
                background-color: rgba(255, 255, 255, 1);

                .order_state{
                    display: flex;
                    height: 40px;
                    width: 90%;
                    margin: auto;
                    padding-top: 2px;
                    justify-content: space-between;
                    align-items: center;
                    a{
                        font-size: 14px;
                        color: #eb9754;
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
                    width: 90%;
                    margin: 10px auto;

                    a{

                    }
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