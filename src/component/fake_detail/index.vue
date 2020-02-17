<template>

    <!--动画效果下面骨架框-->
    <div class="hotel_animate_frame">
        <div class="hotel_animate_frame_curry" />

        <div class="animate_frame_date" />

        <div class="animate_frame_type">
            <!--具体每一个框-->
            <div class="detail_type_frame" v-for="frame in 6" :key="frame">
                <div class="type_frame_img" />
                <div class="type_frame_word">
                    <div class="type_frame_word_note">
                        <div style="height: 20px;margin-bottom: 5px"/>
                        <div style="height: 18px"/>
                    </div>
                </div>
                <div class="type_frame_price">
                    <div class="type_frame_price_note">
                        <div/>
                    </div>
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
                sss:{
                    height:'',
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
    .hotel_animate_frame {
        width: 100%;
        background-color: #f5f5f5;

        .hotel_animate_frame_curry {
            height: 9px;
            width: 100%;
            background-color: white;
            border-bottom: 5px solid #dedede;
            border-image: linear-gradient(to bottom, #e6e6e6, #f5f5f5) 60 0;
        }

        .animate_frame_date {
            height: 48px;
            width: 93%;
            margin: 10px auto 0 auto;
            border-radius: 12px;
            box-shadow: 0 0 8px #dedede;
            background-color: white;
        }

        .animate_frame_type {
            width: 93%;
            margin: 12px auto;
            border-radius: 12px;
            box-shadow: 0 0 8px #dedede;
            background-color: white;

            .detail_type_frame {
                display: flex;
                height: 100px;
                width: 100%;
                align-items: center;

                .type_frame_img {
                    height: 80px;
                    width: 80px;
                    margin-left: 10px;
                    border-radius: 10px;
                    background-color: rgba(255, 168, 87, 0.3);
                }

                .type_frame_word {
                    display: flex;
                    height: 80px;
                    margin-left: 7px;
                    align-items: center;

                    .type_frame_word_note {
                        display: flex;
                        flex-direction: column;

                        div {
                            width: 100px;
                            border-radius: 4px;
                            background-color: rgba(255, 168, 87, 0.3);
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

                        div {
                            height: 30px;
                            width: 70px;
                            border-radius: 4px;
                            background-color: rgba(255, 168, 87, 0.3)
                        }
                    }
                }

            }
        }

    }
</style>