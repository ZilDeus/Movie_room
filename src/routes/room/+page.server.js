import { GetUser } from "$lib/server/getter.js";
export async function load({ cookies, url }) {
  const path = url.searchParams.get("video");
  const user = await GetUser(cookies.get("user-id"));
  return {
    user: user,
    path: path,
  }
}
