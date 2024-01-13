<script>
  import Input from "../lib/Input.svelte";
  import Button from "../lib/Button.svelte";
  let videoName = "";
  let videoImage = "";
  let videoFile;
</script>

<form method="post" action="?/add_video" enctype="multipart/form-data">
  <Input
    label="Name"
    id="name"
    name="name"
    type="text"
    bind:value={videoName}
  />
  <div class="flex my-2 gap-2 flex-col w-2/3">
    <Input
      label="thumbnail url"
      id="video_image"
      name="video_image"
      type="text"
      bind:value={videoImage}
    />
  </div>
  <h1 class="text-blue-600 text-xl">video</h1>
  <input type="file" id="video_file" name="video_file" bind:files={videoFile} />
  <br />
  <Button type="submit">Upload</Button>
</form>
