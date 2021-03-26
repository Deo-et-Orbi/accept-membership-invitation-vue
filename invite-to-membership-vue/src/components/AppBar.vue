<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand href="#">Invite to DEO membership</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item>{{ displayName }}</b-nav-item>
      <b-nav-item @click="logOut()">Wyloguj się</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase/app";

@Component
export default class EnsureLoggedIn extends Vue {
  get user(): firebase.User | null {
    return firebase.auth().currentUser;
  }

  get displayName(): string {
    return this.user ? this.user.displayName || "(no name)" : "(no user)";
  }

  async logOut(): Promise<void> {
    await firebase.auth().signOut();
  }
}
</script>
