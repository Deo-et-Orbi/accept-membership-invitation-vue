<template>
  <div>
    <InviteForm />
    <InvitationsList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase/app";
import InviteForm from "./InviteForm.vue";
import InvitationsList from "./InvitationsList.vue";

@Component({
  components: {
    InviteForm,
    InvitationsList,
  },
})
export default class InvitationsPanel extends Vue {
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
