import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const username = form.get("username");
    const email = form.get("email");
    const password = form.get("password");
    const response = await fetch("http://192.168.4.14:8000/api/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username,
        "email": email,
        "password": password,
      }),
    });
    redirect(303, "/");
  },
};
