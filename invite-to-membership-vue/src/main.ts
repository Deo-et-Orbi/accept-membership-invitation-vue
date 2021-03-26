import firebase from "firebase/app";
import "firebase/auth";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Vue from "vue";
import App from "./App.vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

async function initializeAppInviteToMembershipVue(mountTarget: string) {
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
    console.error(
      "Failed to load firebase from firebase hosting, " +
        "trying to load dev config. Error: ",
      err
    );
    await initFirebaseFromJSON("/firebase.init.dev.json");
    console.log("Successfully loaded firebase dev config");
  }
  initVue();
}

initializeAppInviteToMembershipVue("#vue-app");
