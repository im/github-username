<template>
    <div id="app">
         <a-button>Default</a-button>
        <a-button type="dashed">Dashed</a-button>
        <a-button type="danger">Danger</a-button>
        <a-button type="link">Link</a-button>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
const usernameList = require('../username/')
@Component({
    components: {
    },
    created () {
        console.log(usernameList);
    }
})
export default class App extends Vue {}
</script>
<style lang="stylus">
#app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
</style>
