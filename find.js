const characters = [
  {
    name: "Daenerys Targaryen",
    show: "Game of Thrones",
    seasons: 8,
  },
  {
    name: "Dolores Abarnathy",
    show: "West World",
    seasons: 4,
  },
  {
    name: "Don Draper",
    show: "Mad Men",
    seasons: 7,
  },
  {
    name: "Thomas Shelby",
    show: "Peaky Blinders",
    seasons: 6,
  },
  {
    name: "Rick Sanchez",
    show: "Rick & Morty",
    seasons: 4,
  },
  {
    name: "Jeff Probst",
    show: "Survivor",
    seasons: 43,
  },
  {
    name: "Charlotte Hale",
    show: "West World",
    seasons: 4,
  },
];

//! will help us find the FIRST element that matches the condition we provided. similar to a filter but will only return one element.
//* find()

// const thomas = characters.find((char) => {
//   return char.name === "Thomas Shelby";
// });

//* concise version where return is implied
// const thomas = characters.find((char) =>  char.name === "Thomas Shelby");
// console.log(thomas);

//* Destructuring the char passed to the callback function, in which we only grab the "name" key
const hale = characters.find(({ name }) => name === "Charlotte Hale");

console.log(hale);
