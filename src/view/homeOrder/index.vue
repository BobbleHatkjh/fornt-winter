<template>
    <div class="order_bac" :style="sss">

        <div style="height: 20px" />
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

                    </div>

                </van-tab>

                <van-tab title="历史订单">内容 2</van-tab>
            </van-tabs>
        </div>

    </div>
</template>

<script>
    import {Tabbar, TabbarItem, NavBar, Tab, Tabs} from 'vant';
    import sss from '../../assets/order_bac.png'

    export default {
        components: {
            [NavBar.name]: NavBar,
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
        },
        data(){
            return{
                tab_active: 0,  // 订单tab的浏览active
                sss:{
                    height:'',
                    background: "url('" + sss + "') no-repeat center center fixed",
                    backgroundSize: "cover",
                },
                order_list:[
                    {
                        id: 10969,
                        state: '待入住',
                        hotel: '汉庭大学城店',
                        date: '',
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

        .order_tab{
            width: 88%;
            margin: auto;

            .order_frame{
                height: 130px;
                width: 100%;
                margin: 20px auto;
                border-radius: 12px;
                background-color: rgba(255, 255, 255, 1);

                .order_state{
                    display: flex;
                    height: 40px;
                    width: 90%;
                    margin: auto;
                    justify-content: space-between;
                    align-items: center;
                    a{
                        font-size: 14px;
                    }
                    span{
                        color: #ffa857;
                        font-size: 18px;
                        font-weight: bolder;
                    }
                }



            }
        }

    }
</style>