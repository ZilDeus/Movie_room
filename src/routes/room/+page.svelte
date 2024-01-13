<script>
  import Nav from "$lib/Nav.svelte";
  export let data;
  console.log(data);
</script>

<div class="flex flex-col max-h-screen">
  <Nav user={data.user.username} />
  <div class="flex-grow h-screen">
    <div class="w-3/4 bg-black h-full float-left">
      <video class="h-full w-full" controls>
        <source
          src="http://192.168.4.14:8000/api/media/uploaded_video/mov_bbb_05ZBnJF.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="w-1/4 bg-black h-full float-right border-l"></div>
  </div>
</div>
