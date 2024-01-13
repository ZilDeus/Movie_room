<script>
  import Input from "../lib/Input.svelte";
  import Button from "../lib/Button.svelte";
  let videoName = "";
  let videoImage = "";

</script>

<form method="POST" class="space-y-5 {$$props.class}">
  <Input
    label="Name"
    id="name"
    name="name"
    type="text"
    bind:value={videoName}
  />
  <Input
    label="Image"
    id="image"
    name="image"
    type="file"
    bind:value={videoImage}
  />
  <Button type="submit">Upload</Button>
</form>
