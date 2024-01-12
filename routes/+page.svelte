<script>
  import { rooms } from "../store.js";
  import { movies } from "../store.js";
  import Nav from "$lib/Nav.svelte";
  import Button from "$lib/Button.svelte";
  console.log("movies count is", $rooms.length);
</script>

<Nav user={{ userName: "neofetch" }} />
<div class="flex h-14 justify-center items-center my-10"><Button>Create New Room</Button></div>
<div class="grid grid-cols-3 grid-flow-row p-10 justify-items-center">
  {#each { length: $rooms.length } as _, i}
    <div class="w-36 my-10 aspect-square bg-black rounded-lg relative">
      <img
        src={$movies[$rooms[i].movie].thumbnail}
        alt=""
        class="rounded-lg top-0 left-0 absolute w-full h-full"
      />
      <div
        class="absolute bg-gray-50 w-full h-full rounded-lg flex flex-col items-center justify-center text-xs"
        style="background: rgba(0,0,0,0.7);"
      >
        <p class="text-white z-10">{$movies[$rooms[i].movie].name}</p>
        <p class="text-white z-10">watching : {$rooms[i].users}</p>
      </div>
    </div>
  {/each}
</div>
