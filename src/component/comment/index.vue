<template>
    <div class="comment_bac" >

        <!--评论，酒店介绍-->
        <div class="detail_comment">
            <van-tabs
                    v-model="detail_active"
                    swipeable
                    :animated="true"
                    color="#ffa857"
                    title-active-color="#ffa857"
                    :border="false"
            >
                <van-tab title="评论">

                    <div class="comment_tab" v-for="com in 4" :key="com">
                        <div class="comment_info">
                            <a>来自旅客</a>
                            <a>2020-2-10</a>
                            <div />
                        </div>
                        <div class="comment_word">
                            <a>真好！真棒！好舒服！好智能！</a>
                        </div>
                    </div>

                </van-tab>
                <van-tab title="酒店介绍">
                    酒店介绍
                </van-tab>
            </van-tabs>

        </div>

    </div>
</template>

<script>
    import {Tabbar, TabbarItem, Icon, Tab, Tabs} from 'vant';

    export default {
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
            [Icon.name]: Icon,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
        },
        data(){
            return{
                detail_active: 0,  //评论和酒店介绍切换
            }
        },
        methods: {

        },

        async created(){

        },
        destroyed() {

        },
    };
</script>

<style lang="less">
    .comment_bac{
        width: 100%;
        user-select: none;

        .detail_comment{
            width: 93%;
            margin: 14px auto;
            border-radius: 12px;
            box-shadow: 0 0 8px #dedede;
            background-color: white;
            overflow: hidden;

            .comment_tab{
                min-height: 90px;
                width: 88%;
                margin: auto;
                padding: 10px 0;

                .comment_info{
                    display: flex;
                    height: 30px;
                    width: 100%;
                    align-items: center;

                    a{
                        margin-right: 12px;
                        color: #646464;
                        font-size: 13px;
                        line-height: 20px;
                    }
                    div{
                        width: 45%;
                        border-bottom: 1px dashed #dedede;
                    }
                }
                .comment_word{
                    width: 100%;
                    margin: 10px 0;
                    a{
                        font-size: 15px;
                    }
                }
            }
        }
    }
</style>