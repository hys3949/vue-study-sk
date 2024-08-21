<template>
    <div>
        <h1>{{ PageTitle }}</h1>

        <div>
            <span> count : </span>
            {{ curentCount }}
        </div>
        <div>
            <button class="btn" type="button" @click="AddCount()">+</button>
            <button class="btn" type="button" @click="MinusCount()">-</button>
            <button @click="increment">increment</button>
        </div>
    </div>
</template>

<script>
    // import { mapGetters, mapActions } from 'vuex';

    export default{
        data() {
            return {
                PageTitle : "Page B",
                curentCount : 0 // default 0
            };
        },
        // computed: {
        //     ...mapGetters(['curentCount'])
        // },
        methods: {
            AddCount(){
                this.curentCount++;
            },
            MinusCount(){
                this.curentCount--;
            },
            // ...mapActions(['increment']),

        },
    }
</script>