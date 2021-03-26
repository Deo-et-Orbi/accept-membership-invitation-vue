<template>
  <div class="log-in-screen">
    <Explanation />
    <section id="firebaseui-auth-container"></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase/app";
import "firebaseui/dist/firebaseui.css";
import * as firebaseui from "firebaseui";
import Explanation from "./Explanation.vue";

@Component({
  components: {
    Explanation,
  },
})
export default class LogInScreen extends Vue {
  mounted(): void {
    this.initializeFirebaseUI();
  }
  private initializeFirebaseUI() {
    console.log("Loading auth...");
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    const uiConfig = {
      signInSuccessUrl: window.location.href,
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
    };
    console.log("Mounting auth...");
    ui.start("#firebaseui-auth-container", uiConfig);
  }
}
</script>
<style scoped>
.log-in-screen {
  margin-top: 60px;
  text-align: center;
}
</style>
