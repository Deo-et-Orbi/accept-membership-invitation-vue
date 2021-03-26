<template>
  <div>
    <div class="account-modal">
      <img
        class="profile-photo"
        v-if="profilePhotoURL"
        :src="profilePhotoURL"
        alt="Zdjęcie profilowe"
      />
      <div>
        <strong>{{ displayName }}</strong>
      </div>
      <p>Czy chcesz użyć tego konta jako konta członkowskiego Deo et Orbi?</p>
      <div class="buttons">
        <button class="yes" @click="accept()">Tak, to będzie moje konto</button>
        <button class="no" @click="decline()">Zaloguj się na inne konto</button>
      </div>
      <p class="error" v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebase from "firebase/app";
import { acceptMembership } from "@/services";
import { Invitation } from "@/domain";

@Component
export default class AcceptMembership extends Vue {
  @Prop()
  invitation!: Invitation;

  user: firebase.User | "" = "";
  error = "";

  mounted(): void {
    this.user = firebase.auth().currentUser || "";
  }

  get displayName(): string {
    return this.user ? this.user.displayName || "" : "";
  }

  get profilePhotoURL(): string {
    return this.user ? this.user.photoURL || "" : "";
  }

  accept(): void {
    acceptMembership(this.invitation.id).then(
      () => this.$emit("accepted"),
      (err) => (this.error = "Nie można zatwierdzić członkostwa: " + err)
    );
  }

  decline(): void {
    this.$emit("decline");
  }
}
</script>
<style scoped>
.account-modal {
  border: 1px solid black;
  color: white;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  background: #555;
}

.account-modal .profile-photo {
  border-radius: 50% 50%;
}

.account-modal .buttons button {
  margin: 1rem;
  padding: 1rem;
  color: white;
  border: 4px solid #ddd;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
}

.account-modal .buttons button:hover {
  box-shadow: 4px 4px 30px 8px rgba(255, 255, 255, 0.4);
}

.account-modal .buttons .yes {
  background: #20c997;
}

.account-modal .buttons .no {
  background: #6f42c1;
}
</style>
