import firebase from "firebase/app";

export async function fetchFromApi<T>(path: string): Promise<T> {
  const user = firebase.auth().currentUser;
  if (!user) throw new Error("Not logged in");
  const idToken = await user.getIdToken();
  const fullURL = "https://deoetorbi.com/nasze/" + path;
  const result = await fetch(fullURL, {
    headers: { Authorization: "Bearer " + idToken },
  });
  return result.json();
}
