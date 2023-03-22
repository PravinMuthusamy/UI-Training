//q1-Create an array of 11 Players
players = [
  "KL Rahul",
  "Ishan Kishan",
  "Rohit Sharma",
  "Virat Kholi",
  "SuryaKumar Yadav",
  "Hardik Pandya",
  "Ravindra Jadeja",
  "Ravichandran Ashwin",
  "Bhuvaneshwar Kumar",
  "Mohammed Siraj",
  "Jasprit Bumrah"
];
console.log(players);

//q2-Remove the injured player
players.shift();
console.log(players);

//q3-Calculate the length of the array after removing the injured player
console.log(players.length);

//q4-Add a player to the list
players.unshift("Shreyas Iyer");
console.log(players);

//q5-Sort all players
console.log(players.sort());

//q6-Assign a random number to all players
for (player of players) {
  let jerseyNo = Math.floor(Math.random() * 100);
  console.log(player + "-" + jerseyNo);
}

//q7-Convert to uppercase and store it in different location
let cricketPlayers = players.map((name) => name.toUpperCase());
console.log(cricketPlayers);
