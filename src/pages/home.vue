<template>
    <div class="home-wrapper">
        <div class="center">
            {{ text }}
            <!--<span class="center2">暂未上线，敬请期待</span>-->
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data () {
            return {
                text: '暂未上线，敬请期待'
            };
        },
        created () {
            this.$http({
                method: 'GET',
                url: '/api/info?id=1'
            }).then((res) => {
                if (res.body.code === 0) {
                    this.text = '请求成功';
                }
            }, (res) => {
                this.text = '请求失败，请重试';
            });
        }
    }
    ;
</script>

<style lang='scss' rel="stylesheet/scss" type="text/css" scoped>
    @import '../../static/css/reset.css';
    @import '../common/css/mixin.scss';

    .home-wrapper {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.70);
        text-align: center;

        .center {
            width: 3.15rem;
            height: 1.6rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #ffffff;
            border-radius: .12rem;
            font-size: .24rem;
            color: #448FE2;
            line-height: 1.6rem;
        }

        .center2 {
            font-size: .24rem;

        }
    }
</style>

