<template>
    <div>
        <h2>{{ title }}</h2>
        <button @click="sendMessage">Click me</button>
    </div>
</template>

<script>
    export default {
        props: ['title'],
        methods: {
            sendMessage() {
                this.$emit('message', 'Hello from MyComponent')
            }
        }
    };
</script>