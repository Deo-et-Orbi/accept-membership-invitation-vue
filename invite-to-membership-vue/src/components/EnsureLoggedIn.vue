<template>
  <div>
    <slot v-if="isLoggedIn" name="loggedIn" />
    <slot v-else name="loggedOut" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase/app";

@Component
export default class EnsureLoggedIn extends Vue {
  isLoggedIn = false;

  beforeMount(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.isLoggedIn = !!user;
    });
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
    }
  }
}
</script>
