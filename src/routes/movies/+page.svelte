<script>
  import Nav from "$lib/Nav.svelte";
  import Button from "$lib/Button.svelte";
  import AddVideoForm from "$lib/AddVideoForm.svelte";
  export let data;
  let movies = data.videos;
  let user = data.user;
</script>

<dialog close id="add-video-dialog"
  class="z-10 absolute mx-auto border-2 top-2 w-full h-2/3 m-5">
  <form method="post" action={`?/add_video`}>
    <AddVideoForm class="m-5" />
  </form>
</dialog>
<Nav user={user.username} />
<div class="grid grid-cols-3 grid-flow-row justify-items-center">
  {#each { length: movies.length } as _, i}
    <div class="bg-black relative">
      <a href="./room?video={movies[i].video_file}">
        <img
          src={movies[i].video_image}
          alt=""
          class="top-0 left-0 w-full h-full object-cover"
        />
        <div
          class="top-0 absolute bg-black/70 hover:bg-black/20 transition-opacity w-full h-full flex flex-col items-center justify-center text-xs"
        ></div>
      </a>
    </div>
  {/each}
  <div class="bg-black relative">
    <img
      src={"https://imgs.search.brave.com/Yv5unZhmaEvpXjHdsSOxQ0-lDyTAkJTC6S9wooSUOc8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzY0LzE2LzU5/LzM2MF9GXzE2NDE2/NTk3MV9FTHhQUHdk/d0hZRWhnNHZaM0Y0/RWo3T21aVnpxcTRP/di5qcGc"}
      alt=""
      class="top-0 left-0 w-full h-full object-cover" />
    <div class="top-0 absolute bg-black/70 hover:bg-black/20 transition-opacity w-full h-full flex flex-col items-center justify-center text-xs" >
      <Button type="submit" onClick={() => document.getElementById("add-video-dialog").show()}> UPLOAD</Button>
    </div>
  </div>
</div>
