<!--分界线效果-->

<template>
    <div class="line_bac">
        <div class="line_bac_ball">
            <!--左边的球-->
            <div class="line_ball_shadow ball_left"/>
            <!--右边的球-->
            <div class="line_ball_shadow ball_right"/>
        </div>
        <div class="line_line">

        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                touch_move_status: false,
                show_animate: false,
            }
        },
        methods: {
            buttonClick() {
                this.$emit('click'); // @click
            },
            touchMove() {
                // event.preventDefault();
                this.touch_move_status = true;
                console.log('滑动');
            },
            touch() {
                event.preventDefault();
                this.show_animate = true;
                console.log('触摸');
            }
        },
        created() {

        },

    }

</script>


<style lang="less">
    .line_bac {
        display: block;
        height: 14px;
        width: 93%;
        margin: 0 auto;
        background-color: white;
        /*box-shadow: 0 0 5px #ebebeb inset;*/
        overflow: hidden;

        .line_bac_ball{
            display: flex;
            height: 14px;
            width: 100%;
            margin: 0 auto;
            align-items: center;

            .line_ball_shadow {
                height: 14px;
                width: 14px;
                border-radius: 100px;
                background-color: #f5f5f5;
                box-shadow: 0 0 5px #d7d7d7 inset;
            }

            .ball_left {
                margin-left: -7px;
            }

            .ball_right {
                margin: auto -7px auto auto;
            }
        }

        .line_line{
            height: 0;
            width: 100%;
            margin-top: -7px;
            /*border-bottom: 1px dashed #e1e1e1;*/
            border-top: 1px dashed rgba(255, 168, 87, 0.6);
        }


    }
</style>