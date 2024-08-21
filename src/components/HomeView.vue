<template>
    <h1>{{ message }}</h1>
    <p v-if="isVisable">
    This paragraph is conditionally rendered.
    </p>
    <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <!-- <MyComponent title="My Custom Component" @message="handleMessage"></MyComponent> -->
        
</template>

<script>
    // import MyComponent from '@/MyComponent.vue';

    export default {
        data() {
            return {
            message: 'Hello, Vue.js!',
            isVisable : true,
            items : ['Item 1', 'Item 2', 'Item 3']
            };
        },
        components: {
            // MyComponent
        },
        methods: {
            handleMessage(payload){
            alert(payload);
            }
        }
        };
</script>