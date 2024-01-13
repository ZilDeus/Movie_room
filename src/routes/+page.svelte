<script>
  import { rooms } from "$lib/../store.js";
  import { movies } from "$lib/../store.js";
  import Nav from "$lib/Nav.svelte";
  import Button from "$lib/Button.svelte";
  export let data;
  let user = data.user;
</script>

<Nav user={user.username} />
<div class="flex h-14 justify-center items-center my-10">
  <form method="post" action="?/create_room">
    <Button type="submit"><p class="text-xl">Create New Room</p></Button>
  </form>
</div>
<div class="flex h-3 justify-center">
  <p class="text-xl">or Join available rooms instead</p>
</div>
<div class="grid grid-cols-3 grid-flow-row p-10 justify-items-center">
  {#each { length: $rooms.length } as _, i}
    <div class="w-44 my-10 aspect-square bg-black rounded-lg relative">
      <img
        src={$movies[$rooms[i].movie].thumbnail}
        alt=""
        class="rounded-sm top-0 left-0 absolute w-full h-full object-cover"
      />
      <div
        class="absolute bg-black/70 hover:bg-black/20 transition-opacity w-full h-full rounded-lg flex flex-col items-center justify-center text-xs"
      >
        <p class="text-white z-10">{$movies[$rooms[i].movie].name}</p>
        <p class="text-white z-10">watching : {$rooms[i].users}</p>
      </div>
    </div>
  {/each}
</div>
