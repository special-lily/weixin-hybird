<template>
    <div>
        <div class="list">
            <ul>
                <li v-for="item in items">{{ item.text }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data () {
            return {
                items: [
                    {text: '11111111111'},
                    {text: '22222222222'},
                    {text: '333333333333333'},
                    {text: '4444444444444444'},
                    {text: '5555555555555555555555'}
                ]
            };
        }
    }
    ;
</script>

<style lang='scss' rel="stylesheet/scss" type="text/css" scoped>
    .list {
        text-align: center;
        color: chocolate;
    }
</style>

