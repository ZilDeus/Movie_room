import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData();
    const userName = form.get("username");
    const password = form.get("password");
    if (userName === "" || password === "") {
      redirect(301, "/");
    }
    console.log(userName + " ::: " + password);

    console.log("sending request");
    const response = await fetch("http://192.168.4.14:8000/api/login/", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": userName,
        "password": password
      }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (!data.error)
      cookies.set('user-id', data.token, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: false,
        maxAge: 60 * 60 * 24 * 30
      });
    redirect(301, "./");
  },
};
