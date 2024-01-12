import { writable } from "svelte/store";

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
        "https://imgs.search.brave.com/bRwZOZAJgyVBM1-MxoGHnmJTXsyZKlPDFTPJ1f5QwXs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qUmxabU0w/T0RrdFkyUmpOUzAw/WkRkakxXSmhaR1l0/TkRsak5XWmtNR001/TVRnMFhrRXlYa0Zx/Y0dkZVFYVnlOakF3/TWpJNU1Ea0AuanBn",
    },
    {
      name: "batman",
      length: 0.0,
      rating: 5,
      thumbnail:
        "https://imgs.search.brave.com/bRwZOZAJgyVBM1-MxoGHnmJTXsyZKlPDFTPJ1f5QwXs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qUmxabU0w/T0RrdFkyUmpOUzAw/WkRkakxXSmhaR1l0/TkRsak5XWmtNR001/TVRnMFhrRXlYa0Zx/Y0dkZVFYVnlOakF3/TWpJNU1Ea0AuanBn",
    },
    {
      name: "wolfs of wallstreet",
      length: 180,
      rating: 5,
      thumbnail:
        "https://imgs.search.brave.com/bRwZOZAJgyVBM1-MxoGHnmJTXsyZKlPDFTPJ1f5QwXs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qUmxabU0w/T0RrdFkyUmpOUzAw/WkRkakxXSmhaR1l0/TkRsak5XWmtNR001/TVRnMFhrRXlYa0Zx/Y0dkZVFYVnlOakF3/TWpJNU1Ea0AuanBn",
    },
  ]
);
