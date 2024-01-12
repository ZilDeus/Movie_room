import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData();
    const username = form.get("username");
    const email = form.get("email");
    const password = form.get("password");
    if (email === "" || password === "") {
      redirect(301, "/");
    }
    console.log(email + " ::: " + password);

    console.log("sending request");
    const response = await fetch("http://192.168.4.94:8000/api/signup/", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": "neofetch",
        "email": "m@gmail.com",
        "password": "123123",
      }),
    });
    console.log(response);
    //redirect(303, "/");
  },
};
