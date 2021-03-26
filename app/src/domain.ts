export interface Invitation {
  id: string;
  displayName: string;
  message: string;
  tiedUID: string;
  tiedEmail: string;
  createdTimestampS: number;
  acceptedTimestampS: number;
}

export function getInvitationLink(invitation: Invitation): string {
  return `https://deoetorbi.com/akceptuj-zaproszenie/?deo=${invitation.id}`;
}
