<template>
    <div>
        <h1>{{ PageTitle }}</h1>

        <div>
            <span> curentCount : </span>
            {{ curentCountB }}
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

    const countHelper = createNamespacedHelpers("PageB");

    export default{
        data() {
            return {
                PageTitle : "Page B",
                curentCountB : 0, // default 0
                
            };
        },
        computed: {
            ...countHelper.mapState(["pageBCount"]),
            ...mapState(['COMM_COUNT']),
            ...mapGetters(['count']),
            
            
        },
        methods: {
            AddCount(){
                this.curentCountB++;
            },
            MinusCount(){
                this.curentCountB--;
            },
            ...mapActions(['increment']),
            

        },
        
    }
</script>