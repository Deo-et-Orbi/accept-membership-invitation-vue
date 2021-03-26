import { mountAcceptMembershipInvitationVue } from "./index";
export * from "./index";

window.mountAcceptMembershipInvitationVue = mountAcceptMembershipInvitationVue;

declare global {
  interface Window {
    mountAcceptMembershipInvitationVue: typeof mountAcceptMembershipInvitationVue;
  }
}
