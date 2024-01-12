<script>
  import Input from "../lib/Input.svelte";
  import Button from "../lib/Button.svelte";
  let email = "";
  let password = "";

  function validatePassword(password,email) {
    return (password.includes(" ")) || !email.includes("@");
  }
</script>
<form method="POST" class="space-y-5 {$$props.class}">
  <Input
    label="Email"
    id="email"
    name="email"
    type="email"
    bind:value={email} />
  <Input
    label="Password"
    id="password"
    name="password"
    type="password"
    bind:value={password} />
  <Button type="submit" disabled={validatePassword(password,email)}>Sign in</Button>
  <slot/>
</form>
