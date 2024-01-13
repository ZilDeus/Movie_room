<script>
  import Input from "$lib/Input.svelte";
  import Button from "$lib/Button.svelte";
</script>

<form method="post" action="?/add_video" enctype="multipart/form-data">
  <Input label="Name" id="name" name="name" type="text" />
  <!-- my "backend" guy can't figure out how to extract the first frame out of a video so i need to provide him with the image url -->
  <div class="flex my-2 gap-2 flex-col w-2/3">
    <Input
      label="thumbnail url"
      id="video_image"
      name="video_image"
      type="text"
    />
  </div>
  <h1 class="text-blue-600 text-xl">video</h1>
  <input type="file" id="video_file" name="video_file"/>
  <br />
  <Button type="submit">Upload</Button>
</form>
