import { redirect } from "@sveltejs/kit";
import { GetUser } from "$lib/server/getter.js";

export async function load({ cookies }) {
  if (!cookies.get("user-id")) {
    console.log("user-id not found,redirecting to sign-in page...");
    redirect(301, "./sign-in");
  }
  const user = await GetUser(cookies.get("user-id"));
  return {user:user };
}

export const actions = {
  create_room: async () => {
    redirect(301, "./movies");
  },
};
