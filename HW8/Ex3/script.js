// - Destructurati name
const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};
const { name } = person;
console.log(name);

// - Clonati obiect car, pe care-l mergeuim cu modelYear: 2022 si alte settings - wheels, engine

const car = {
  name: "Toyota",
  settings: {
    color: "white",
    doors: 5,
  },
};

const clonedCar = {
  ...car,
  modelYear: 2022,
  settings: {
    wheels: 5,
    engine: "electric",
  },
};
console.log(clonedCar);
// - Destructurati color si doors.

const {
  settings: { color, doors },
} = car;
console.log(color, doors);

// - Clonati obiectul car

const newCar = {
  ...car,
};

console.log(newCar);

// - Clonati obiectul person

const newPerson = {
  ...person,
};
console.log(newPerson);
