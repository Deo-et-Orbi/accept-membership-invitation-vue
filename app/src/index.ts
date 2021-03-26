import firebase from "firebase/app";
import "firebase/auth";

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

export async function mountAcceptMembershipInvitationVue(
  mountTarget: string
): Promise<void> {
  async function initFirebaseFromJSON(url: string) {
    const response = await fetch(url);
    firebase.initializeApp(await response.json());
  }
  function initVue() {
    new Vue({
      render: (h) => h(App),
    }).$mount(mountTarget);
  }

  try {
    await initFirebaseFromJSON("/__/firebase/init.json");
  } catch (err) {
    console.warn(
      "Failed to load firebase from firebase hosting, " +
        "trying to load dev config. Error: ",
      err
    );
    await initFirebaseFromJSON("/firebase.init.dev.json");
    console.log("Successfully loaded firebase dev config");
  }
  initVue();
}
