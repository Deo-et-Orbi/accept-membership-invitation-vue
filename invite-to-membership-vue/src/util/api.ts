import firebase from "firebase/app";

export async function fetchFromApi<T>(path: string): Promise<T> {
  const user = firebase.auth().currentUser;
  if (!user) throw new Error("Not logged in");
  const idToken = await user.getIdToken();
  const fullURL = "https://deoetorbi.com/nasze/" + path + "?rnd=" + Date.now();
  const result = await fetch(fullURL, {
    headers: { Authorization: "Bearer " + idToken },
  });
  if (!result.ok) {
    const bodyJson = await result.json();
    throw new Error(bodyJson.error || "No error description");
  }
  return result.json();
}

export async function postToApi<T, R>(path: string, data: T): Promise<R> {
  const user = firebase.auth().currentUser;
  if (!user) throw new Error("Not logged in");
  const idToken = await user.getIdToken();
  const fullURL = "https://deoetorbi.com/nasze/" + path + "?rnd=" + Date.now();
  const result = await fetch(fullURL, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + idToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!result.ok) {
    const bodyJson = await result.json();
    throw new Error(bodyJson.error || "No error description");
  }
  return result.json();
}
