import { GetUser } from "$lib/server/getter.js";
export async function load({ cookies, url }) {
  if (!cookies.get("user-id")) {
    console.log("user-id not found.... redirecting to sign-in page");
    redirect(301, "./sign-in");
  }
  const path = url.searchParams.get("video");
  const user = await GetUser(cookies.get("user-id"));
  return {
    user: user,
    path: path,
  }
}
