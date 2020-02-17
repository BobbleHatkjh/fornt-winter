<!--按钮动态效果-->

<template>
    <div :class="[div_style,show_animate && animate_style]"
         @touchstart="show_animate = true"
         @touchend="show_animate = false"
         @touchmove="show_animate = false"
         @click="buttonClick"
    >
        <slot />
    </div>
</template>

<script>

    export default {
        props: ['div_style', 'animate_style'],
        data() {
            return {
                touch_move_status: false,
                show_animate: false
            }
        },
        methods:{
            buttonClick() {
                this.$emit('click'); // @click
            },
            touchMove() {
                // event.preventDefault();
                this.touch_move_status = true;
                console.log('滑动');
            },
            touch(){
                event.preventDefault();
                this.show_animate = true;
                console.log('触摸');
            }
        },
        created() {

        },

    }

</script>

