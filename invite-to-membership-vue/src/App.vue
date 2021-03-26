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

<style>
.error {
  display: block;
  padding: 1rem;
  background: rgba(255, 0, 0, 0.1);
  color: red;
  border: 1px solid rgba(255, 0, 0, 0.5);
  border-radius: 0.5rem;
}
</style>
