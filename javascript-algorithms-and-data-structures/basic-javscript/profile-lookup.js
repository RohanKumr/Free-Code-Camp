// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let propValue = null;
  let nameExists = null;
  for (let i = 0; i <= contacts.length - 1; i++) {
    const c = contacts[i];
    if (c.firstName === name) {
      nameExists = name;
      if (c.hasOwnProperty(prop)) {
        propValue = c[prop];
      }
    }
  }
  return (propValue || (!nameExists && "No such contact") || "No such property");
}

console.log(lookUpProfile("Kristian", "lastName"));
