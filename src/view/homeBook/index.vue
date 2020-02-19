<template>
    <div class="home_book_bac" :style="h_b_bac">
        <div style="height: 170px"></div>

        <div class="home_book_frame" @click="ttt">
            <div class="button_book">
                <van-icon style="margin: auto 0 auto auto" name="search" size="20" />
                <a>简单从这里开始</a>
            </div>
            <div class="button_ad">
                <div class="button_ad_frame">
                    <van-icon name="desktop-o" style="margin: auto 0 auto auto" />
                    <a>智能</a>
                </div>
                <div class="button_ad_frame">
                    <van-icon name="flower-o" style="margin: auto 0 auto auto" />
                    <a>舒适</a>
                </div>
                <div class="button_ad_frame">
                    <van-icon name="smile-o" style="margin: auto 0 auto auto" />
                    <a>安全</a>
                </div>
            </div>

        </div>

    </div>


</template>

<script>
    import { Tabbar, TabbarItem, NavBar, Icon } from 'vant';
    import home_bac from '../../assets/home_bac.png'

    export default {
        components: {
            [NavBar.name]: NavBar,
            [Tabbar.name]: Tabbar,
            [Icon.name]: Icon,
            [TabbarItem.name]: TabbarItem

        },
        data(){
            return{
                h_b_bac:{
                    height:'',
                    background: "url('" + home_bac +"') no-repeat center fixed",
                    backgroundPosition:"30%",
                    backgroundSize: "cover",
                }
            }
        },
        methods: {
            getHeight(){
                this.h_b_bac.height = window.innerHeight - 50 + 'px';

            },

            originDate(){  // 初始时间
                let dateObj = {date_num:1,in:{},out:{}};
                const nowDate = new Date;
                const tomorrow = new Date;
                tomorrow.setTime(tomorrow.getTime()+24*60*60*1000);

                dateObj.in.month = nowDate.getMonth() + 1;
                dateObj.in.date = nowDate.getDate();
                dateObj.in.week = "日一二三四五六".charAt(nowDate.getDay());

                dateObj.out.month = tomorrow.getMonth() + 1;
                dateObj.out.date = tomorrow.getDate();
                dateObj.out.week = "日一二三四五六".charAt(tomorrow.getDay());
                this.$store.state.date_origin = dateObj;
            },

            ttt(){
                this.$store.state.page_change_status = 'next';
                this.$router.push('book');
            }

        },
        async created(){
            this.getHeight();
            this.originDate();

        },
        destroyed(){

        },
    };
</script>

<style lang="less">
    .home_book_bac{
        width: 100%;
        color: #ffa857;
        animation: bac_move 20s linear infinite;
        animation-direction: alternate;
        user-select: none;

        .home_book_frame{
            display: block;
            height: 80px;
            width: 100%;
            margin: auto;
            overflow: hidden;
            animation: home_move 1.2s;
            animation-direction: alternate;
            -webkit-animation-direction: alternate;

            .button_book{
                display: flex;
                height: 40px;
                width: 80%;
                min-width: 238px;
                margin: auto;
                justify-content: center;
                border-top: 0;
                overflow: hidden;
                border-bottom: 1px solid #ffa857;
                border-image: linear-gradient(to right,rgba(255,168,87,0),rgba(255,168,87,1),rgba(255,168,87,0)) 100 0;
                a{
                    font-size: 20px;
                    font-weight: bolder;
                    margin: auto auto auto 4px;
                    letter-spacing: 4px;
                }
            }

            .button_ad{
                display: flex;
                height: 36px;
                width: 238px;
                margin: auto;
                overflow: hidden;

                .button_ad_frame{
                    display: flex;
                    height: 100%;
                    width: 65px;
                    margin: auto;
                    color: #ffa857;
                }
                .button_ad_frame a{
                    font-size: 16px;
                    color: #ffe0c4;
                    margin: auto auto auto 4px;
                }
            }
        }
    }

    @keyframes bac_move
    {
        from {background-position: 70%}
        to {background-position: 30%}
    }

    /*触发框的动画*/
    @keyframes home_move
    {
        from {
            width: 0;
            border-left: 2px solid white;
            border-right: 2px solid white;
        }
        to {
            width: 100%;
            border: none;
        }
    }


</style>