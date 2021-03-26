import { Invitation } from "./domain";
import { fetchFromPublicApi } from "./util";

export function loadInvitation(id: string): Promise<Invitation> {
  return fetchFromPublicApi(`public_api/invitation/${id}`);
}
