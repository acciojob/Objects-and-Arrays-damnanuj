const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
const team = players;
const team1 = [...players]; // Create a shallow copy of the players array
const cap1 = Object.assign({}, person); // Create a shallow copy of the person object


// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
