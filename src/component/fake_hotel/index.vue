<template>

    <!--点击搜索按钮的额外动画-->

    <div class="book_animate_page">

        <!--标题栏-->
        <div class="animate_page_nav">
            <div class="nav_frame">
                <div class="frame_icon"/>
                <div class="frame_search"/>
                <div class="frame_icon"/>
            </div>
            <div class="nav_drop">
                <div class="drop_shadow"/>
            </div>
        </div>

        <!--占位-->
        <div style="height: 12px"/>

        <!--hotel补位框-->
        <div class="animate_hotel_frame"
             v-for="index in 3"
             :key="index"
        >
            <div class="hotel_frame_img" />
            <div class="hotel_frame_name" />
            <div class="hotel_frame_note">
                <div class="note_left" >
                    <div class="note_single" />
                    <div class="note_single" />
                    <div class="note_single" />
                </div>
                <div class="note_right">
                    <div class="price_single"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        components: {

        },
        data(){
            return{
                fake_hotel_css:{

                }
            }
        },
        methods: {

        },
        created(){

        },
        destroyed(){

        },
    };
</script>

<style lang="less">
    .book_animate_page {
        height: 100%;
        width: 100%;
        overflow: auto;

        .animate_page_nav {
            height: 81px;
            width: 100%;
            background-color: white;

            .nav_frame {
                display: flex;
                height: 46px;
                width: 100%;
                justify-content: space-around;
                align-items: center;

                .frame_icon {
                    height: 22px;
                    width: 22px;
                    border-radius: 4px;
                    background-color: rgba(255, 168, 87, 0.3);
                }

                .frame_search {
                    height: 28px;
                    width: 60%;
                    border-radius: 100px;
                    background-color: rgba(255, 168, 87, 0.3);
                }
            }

            .nav_drop {
                display: flex;
                height: 35px;
                width: 100%;

                .drop_shadow {
                    height: 18px;
                    width: 90%;
                    margin: auto;
                    border-radius: 4px;
                    background-color: rgba(255, 168, 87, 0.3);
                }
            }
        }

        .animate_hotel_frame{
            height: 240px;
            width: 91%;
            margin: 0 auto 12px auto;
            border-radius: 12px;
            box-shadow: 0 0 8px #dedede;
            background-color: white;
            animation: hotel_move 400ms;
            animation-direction: alternate;
            -webkit-animation-direction: alternate;
            overflow: hidden;

            .hotel_frame_img{
                height: 140px;
                width: 100%;
                background-color: rgba(255, 168, 87, 0.3);
            }
            .hotel_frame_name{
                height: 21px;
                width: 65%;
                margin: 8px;
                border-radius: 4px;
                background-color: rgba(255, 168, 87, 0.3);
            }
            .hotel_frame_note{
                display: flex;
                height: 63px;
                width: 100%;

                .note_left{
                    display: block;
                    height: 100%;
                    width: 70%;

                    .note_single{
                        height: 14px;
                        width: 65%;
                        margin: 0 auto 5px 8px;
                        border-radius: 4px;
                        background-color: rgba(255, 168, 87, 0.3);
                    }
                }
                .note_right{
                    display: flex;
                    height: 100%;
                    width: 30%;
                    justify-content: center;
                    align-items: center;

                    .price_single{
                        height: 33px;
                        width: 60%;
                        border-radius: 4px;
                        background-color: rgba(255, 168, 87, 0.3);
                    }
                }
            }
        }
    }
    .book_animate_page::-webkit-scrollbar {
        width: 0;
    }

    /*按钮点击后 补位框 的动画效果*/
    @keyframes hotel_move {
        from {
            margin-top: 500px;
        }
        to {
            margin-top: 0;
        }
    }

</style>