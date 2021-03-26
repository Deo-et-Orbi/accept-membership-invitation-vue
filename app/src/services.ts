import { Invitation } from "./domain";
import { fetchFromPublicApi, postToApi } from "./util";

export function loadInvitation(id: string): Promise<Invitation> {
  return fetchFromPublicApi(`public_api/invitation/${id}`);
}

export function acceptMembership(invitationID: string): Promise<Invitation> {
  return postToApi(`nonmember_api/accept_invitation`, {
    invitationID,
  });
}
