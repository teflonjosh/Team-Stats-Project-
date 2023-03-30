//Declare variable
const team = {
  
  // Enter Objects
  _players: [
    {
      firstName: "Pete",
      lastName: "Wheeler",
      age: 54,
    },
    {
      firstName: "Josh",
      lastName: "Jacob",
      age: 38,
    },
    {
      firstName: "Bob",
      lastName: "Smith",
      age: 69,
    },
  ],

  // Enter Objects
  _games: [
    {
      opponent: "Cruz Azul",
      teamPoints: 4,
      opponentPoints: 5,
    },
    {
      opponent: "Los Tigres",
      teamPoints: 2,
      opponentPoints: 9,
    },
    {
      opponent: "Club America",
      teamPoints: 2,
      opponentPoints: 1,
    },
  ],

  // Getting Data
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  // Add Player Info
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age,
    };
    // Push to Object
    this._players.push(player);
  },

  // Add Game Info
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    // Push to Object
    this._games.push(game);
  },
}; // close bracket to objects 

// Add Player - Can be Updated
team.addPlayer("Bugs", "Bunny", 76);

// Add Game - Can be Updated
team.addGame("Leon", 3, 3);

// Log to Console Results
console.log(team.players);
console.log(team.games);
// End of Program
