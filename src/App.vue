<template>
    <div id="app">
        <div class="warp">
            <div class="search">
                <a-input-search
                    size="large"
                    v-model="keyword"
                    placeholder="Please enter user name"
                    style="width: 400px"
                    @change="onSearch"
                />
            </div>
            <div class="tags">
                <a-tag
                    :color="item.occupy ? '' : 'blue'"
                    :class="{'disabled': item.occupy }"
                    v-for="item in showList"
                >{{item.name}}</a-tag>
            </div>
            <div class="footer">
                <div>
                    <span>已被占用: {{userInfo.occupyCount}}</span>
                    <span>可用: {{userInfo.unoccupyCount}}</span>
                    <span>总数: {{userInfo.total}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
const userInfo = require('../username/')
@Component({})
export default class App extends Vue {
    userInfo: Object = userInfo

    keyword: String = ''

    list: Array<any> = []

    showList: Array<any> = []

    onSearch() {
        this.showList = this.list.filter(item => {
            return ~item.name.indexOf(this.keyword)
        })
    }

    formatData() {
        this.userInfo.unoccupyName.forEach((name: String) => {
            this.list.push({
                occupy: false,
                name: name
            })
        })
        this.userInfo.occupyName.forEach((name: String) => {
            this.list.push({
                occupy: true,
                name: name
            })
        })
        this.showList = [...this.list]
    }
    created() {
        this.formatData()
    }
}
</script>
<style lang="stylus">
html, body
    width 100%
    height 100%
#app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    display flex
    align-content center
    width 100%
    height 100%
.search
    margin-bottom 20px
.tags
    width 600px
    margin 0 auto
    height calc(100vh - 140px)
    overflow-y auto
    .ant-tag
        margin 5px
        &.disabled
            color rgba(0, 0, 0, 0.25)
            background-color #f5f5f5
            border-color #d9d9d9
            text-shadow none
            box-shadow none
.footer
    span
        margin 0 10px
        color #6a737d
.warp
    padding-top 30px
    width 100%
    height 100%
</style>
