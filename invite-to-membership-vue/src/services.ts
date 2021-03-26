import { Invitation } from "./domain";
import { fetchFromApi, postToApi } from "./util";

export function loadInvitations(): Promise<Invitation[]> {
  return fetchFromApi("api/all_invitations");
}

export function createInvitation({
  displayName,
  message,
}: {
  displayName: string;
  message: string;
}): Promise<Invitation> {
  return postToApi("api/invite", {
    displayName,
    message,
  });
}
