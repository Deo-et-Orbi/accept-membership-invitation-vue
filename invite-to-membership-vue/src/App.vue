<template>
  <div id="app">
    <EnsureLoggedIn>
      <template #loggedIn>Logged in</template>
      <template #loggedOut><LogInScreen /></template>
    </EnsureLoggedIn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EnsureLoggedIn, LogInScreen } from "./components";

@Component({
  components: {
    EnsureLoggedIn,
    LogInScreen,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
