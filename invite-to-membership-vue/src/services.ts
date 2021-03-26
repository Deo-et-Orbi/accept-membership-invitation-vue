import { Invitation } from "./domain";
import { fetchFromApi } from "./util";

export function loadInvitations(): Promise<Invitation[]> {
  return fetchFromApi("api/all_invitations");
}