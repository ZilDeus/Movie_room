export async function GetUser(userId) {
  console.log(userId);
  const response = await fetch("http://192.168.4.14:8000/api/getuser/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ "user_token": userId }),
  });
  const user = await response.json();
  return user;
}
export async function GetRooms() {
}
export async function GetVideos() {
  const res = await fetch("http://192.168.4.14:8000/api/getVideo", {
    method: "GET",
  });
  const videos = await res.json();
  return videos.videos_dict;
}
