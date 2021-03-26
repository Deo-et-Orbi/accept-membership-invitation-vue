import { mountInviteToMembershipVue } from "./index";
export * from "./index";

window.mountInviteToMembershipVue = mountInviteToMembershipVue;

declare global {
  interface Window {
    mountInviteToMembershipVue: typeof mountInviteToMembershipVue;
  }
}
