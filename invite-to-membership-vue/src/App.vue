<template>
  <div id="app">
    <EnsureLoggedIn>
      <template #loggedIn>
        <AppBar />
        <InvitationsPanel />
      </template>
      <template #loggedOut><LogInScreen /></template>
    </EnsureLoggedIn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  EnsureLoggedIn,
  LogInScreen,
  AppBar,
  InvitationsPanel,
} from "./components";

@Component({
  components: {
    EnsureLoggedIn,
    LogInScreen,
    AppBar,
    InvitationsPanel,
  },
})
export default class App extends Vue {}
</script>

<style></style>
