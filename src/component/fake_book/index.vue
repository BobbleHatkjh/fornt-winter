<template>

    <!--返回动画上面的部分-->
    <div class="back_fake_frame">
        <div class="back_fake_stick"/>
        <div class="fake_book_date">
            <div class="date_chose" />
            <div class="date_mid">
                <div class="date_mid_arrow">
                    <van-icon class="mid_arrow" name="arrow" color="#e9a063" size="48"/>
                </div>
            </div>
            <div class="date_chose" />
        </div>
        <div class="back_fake_stick"/>
        <div class="back_fake_stick" style="margin-top: 15px" />

        <!--下方的拉起框-->
        <div class="book_pull">
            <div class="pull_icon">
                <van-icon name="arrow-up" />
            </div>
            <div class="pull_frame">

            </div>

        </div>

    </div>

</template>

<script>

    import {Icon} from "vant";

    export default {
        components: {
            [Icon.name]: Icon,
        },
        data(){
            return{

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

    .back_fake_frame{
        width: 91%;
        margin: -20px auto 0 auto;

        .back_fake_stick{
            height: 48px;
            width: 100%;
            border-radius: 12px;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
            background-color: white;
        }
        .fake_book_date {
            display: flex;
            width: 100%;
            margin: 15px auto;
            justify-content: space-between;
            background-color: rgba(0,0,0,0);

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
        .book_pull{
            position: fixed;
            display: block;
            bottom: 0;
            height: 70px;
            width: 91%;
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
                color: #ffa857;
            }
            .pull_frame{
                height: 100%;
                width: 100%;
                margin: auto;
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
                background-color: white;
                overflow: hidden;
            }
        }
    }
</style>