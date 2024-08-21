<template>
  <div id="app">
    <h1>Router Test</h1>
    <nav>
      <router-link to="/">Home</router-link>
      &nbsp;
      <router-link to="/A">PageA</router-link>
      &nbsp;
      <router-link to="/B">PageB</router-link>
    </nav>
    <button type="button" @click="moveToHome()">home으로 이동</button>
    <!-- 라우터 뷰 (컴포넌트) -->
  <router-view :blogData="blogData"></router-view>

  </div>
</template>


<script>
export default {
  methods:{
    moveToHome(){
      this.$router.push("/");
    }
  }
};
</script>
