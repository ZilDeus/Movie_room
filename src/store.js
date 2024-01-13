import { writable } from "svelte/store";

//dummy data
export const rooms = writable(
  [
    {
      movie: 0,
      users: 3,
    },
    {
      movie: 1,
      users: 5,
    },
    {
      movie: 2,
      users: 1,
    },
    {
      movie: 3,
      users: 2,
    },
    {
      movie: 2,
      users: 8,
    },
  ]
);
export const movies = writable(
  [
    {
      name: "mission impossible",
      length: 160,
      rating: 5,
      thumbnail:
        "https://imgs.search.brave.com/bRwZOZAJgyVBM1-MxoGHnmJTXsyZKlPDFTPJ1f5QwXs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qUmxabU0w/T0RrdFkyUmpOUzAw/WkRkakxXSmhaR1l0/TkRsak5XWmtNR001/TVRnMFhrRXlYa0Zx/Y0dkZVFYVnlOakF3/TWpJNU1Ea0AuanBn",
    },
    {
      name: "forest gumb",
      length: 120,
      rating: 5,
      thumbnail:
        "https://imgs.search.brave.com/EvGr6xc3JJ_bxImt2fID0hhRSFN2FhmuZLfwZuQET-s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JpZ2luYWxmaWxt/YXJ0LmNvbS9jZG4v/c2hvcC9maWxlcy9m/b3JyZXN0X2d1bXBf/MTk5MV9vcmlnaW5h/bF9maWxtX2FydC53/ZWJwP3Y9MTcwMDY3/OTE4MyZ3aWR0aD0x/MjAw",
    },
    {
      name: "The Dark Knight Rises",
      length: 180,
      rating: 5,
      thumbnail:
        "https://imgs.search.brave.com/yVa6ca3xUTYr4myecFJBrBVrHT4gPLtfc__NWRoyXfk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL21vdmll/cy9tZWRpYS9icm93/c2VyL3RoZV9kYXJr/X2tuaWdodF9yaXNl/c19rZXlfYXJ0Lmpw/Zw",
    },
    {
      name: "wolfs of wallstreet",
      length: 180,
      rating: 5,
      thumbnail:
        "https://imgs.search.brave.com/nYe0QriAOXUwXSWDs6FWU-e6d482N7o-rxD6pBNbleY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5OTYy/OTIuanBn",
    },
  ]
);
