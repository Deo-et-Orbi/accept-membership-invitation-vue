<template>
  <div class="m-4">
    <b-card title="Wygeneruj link zaproszenia" class="mb-3">
      <InviteForm @invited="reloadList()" />
    </b-card>
    <InvitationsList ref="list" />
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
    return this.user
      ? this.user.displayName || "(brak imienia i nazwiska)"
      : "(brak użytkownika)";
  }

  async logOut(): Promise<void> {
    await firebase.auth().signOut();
  }

  reloadList(): void {
    (this.$refs.list as any).reloadInvitations();
  }
}
</script>
