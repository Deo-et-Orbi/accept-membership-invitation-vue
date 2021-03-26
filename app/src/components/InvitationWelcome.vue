<template>
  <div>
    <h2>Hej {{ displayName }}!</h2>
    <p>{{ message }}</p>
    <h3>Już prawie możesz skorzystać z aplikacji mobilnej Deo et Orbi!</h3>
    <p>Jeszcze tylko zaloguj się/załóż konto.</p>
  </div>
</template>

<script lang="ts">
import { Invitation } from "@/domain";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class InvitationWelcome extends Vue {
  @Prop()
  invitation!: Invitation;

  get displayName(): string {
    return this.invitation.displayName;
  }

  get message(): string {
    return this.invitation.message;
  }
}
</script>
