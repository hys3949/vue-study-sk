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
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                PageTitle : "Page A",
                curentCount : 0 // default 0
            };
        },
        methods: {
            AddCount(){
                this.curentCount++;
            },
            MinusCount(){
                this.curentCount--;
            }
        }
    }
</script>