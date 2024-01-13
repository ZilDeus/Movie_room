import { GetUser, GetVideos } from "../../lib/server/getter";
export async function load({ cookies }) {

  if (!cookies.get("user-id")) {
    console.log("user-id not found,redirecting to sign-in page...");
    redirect(301, "./sign-in");
  }

  const user = await GetUser(cookies.get("user-id"));
  const videos = await GetVideos();

  return {
    videos: videos,
    user: user,
  }
}
export const actions = {
  add_video: async ({ request }) => {
    const form = await request.formData();

    //no fucking idea why doesn't work, it even keeps loading as if it's actually sending a file to the server
    await fetch("http://192.168.4.14:8000/api/uploadVideo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: form,
    });
  },
};
