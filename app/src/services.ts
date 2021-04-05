import { Invitation } from "./domain";
import { fetchFromPublicApi, postToApi } from "./util";

export function loadInvitation(id: string): Promise<Invitation> {
  return fetchFromPublicApi(`invitation/get/${id}`);
}

export function acceptMembership(invitationID: string): Promise<Invitation> {
  return postToApi(`invitation/accept`, {
    invitationID,
  });
}
