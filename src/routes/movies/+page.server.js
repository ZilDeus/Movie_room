import { GetUser, GetVideos } from "../../lib/server/getter";
export async function load({ cookies }) {
  const user = await GetUser(cookies.get("user-id"));

  const videos = await GetVideos();

  console.log(videos);
  return {
    videos: videos,
    user: user,
  }
}
export const actions = {
  add_video: async ({ request, cookies }) => {
    const form = await request.formData();

    const res = await fetch("http://192.168.4.14:8000/api/uploadVideo", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: form,
    });
  },
};
