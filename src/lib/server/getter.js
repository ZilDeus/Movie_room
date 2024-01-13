export async function GetUser(userId) {
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
// no rooms on backend yet
export async function GetRooms() {
}

export async function GetVideos() {
  const res = await fetch("http://192.168.4.14:8000/api/getVideo", {
    method: "GET",
  });
  const videos = await res.json();

  //awkward name considering it's not even a dict
  return videos.videos_dict;
}
