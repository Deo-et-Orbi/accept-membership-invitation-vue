<template>
  <div id="app">
    <StatefulResource :resource="invitationRes">
      <InvitationWelcome v-if="invitation" :invitation="invitation" />
      <EnsureLoggedIn>
        <template #loggedIn>
          Czy chcesz użyć tego konta jako konta członkowskiego Deo et Orbi?
        </template>
        <template #loggedOut><LogInScreen /></template>
      </EnsureLoggedIn>
    </StatefulResource>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EnsureLoggedIn, LogInScreen, InvitationWelcome } from "./components";
import { Invitation } from "./domain";
import { Resource, StatefulResource } from "vue-stateful-resource";
import { loadInvitation } from "./services";

@Component({
  components: {
    EnsureLoggedIn,
    LogInScreen,
    StatefulResource,
    InvitationWelcome,
  },
})
export default class App extends Vue {
  invitationRes = Resource.empty<Invitation>();

  beforeMount(): void {
    this.loadInvitation();
  }

  loadInvitation(): void {
    Resource.fetchResource(
      "invitation",
      () => this.doLoadInvitation(),
      (res) => (this.invitationRes = res)
    );
  }

  async doLoadInvitation(): Promise<Invitation> {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("deo");
    if (!id) throw new Error("Brakuje parametru z ID zaproszenia");
    return loadInvitation(id);
  }

  get invitation(): Invitation | undefined {
    return this.invitationRes.result || undefined;
  }
}
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
