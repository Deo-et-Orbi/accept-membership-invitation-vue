export interface Invitation {
  id: string;
  displayName: string;
  message: string;
  tiedUID: string;
  tiedEmail: string;
  createdTimestampS: number;
  acceptedTimestampS: number;
}
