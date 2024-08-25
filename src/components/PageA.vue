<template>
    <div>
        <h1>{{ PageTitle }}</h1>

        <div>
            <span> curentCount : </span>
            {{ curentCountA }}
            <div>
                <button class="btn" type="button" @click="AddCount()">+</button>
                <button class="btn" type="button" @click="MinusCount()">-</button>
            </div>
        </div>
        <div>
            <span> store count : </span>
            {{ count }}
            <div>
                <button @click="increment">increment</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, createNamespacedHelpers } from 'vuex';

const countHelper = createNamespacedHelpers("PageA");
    export default{
        data() {
            return {
                PageTitle : "Page A",
                curentCountA : 0 // default 0
            };
        },
        computed: {
            ...countHelper.mapState(["pageBCount"]),
            ...mapGetters(['count']),
            ...mapState(['COMM_COUNT']),
        },
        methods: {
            AddCount(){
                this.curentCountA++;
            },
            MinusCount(){
                this.curentCountA--;
            },
            ...mapActions(['increment']),
        }
    }
</script>