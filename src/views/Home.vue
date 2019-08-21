<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
// import usernameList from '../../username/usernameList'
@Component({
    components: {
        HelloWorld
    },
    created () {
        console.log(111)
        // console.log(usernameList);
    }
})
export default class Home extends Vue {}
</script>
