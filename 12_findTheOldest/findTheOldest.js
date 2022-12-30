const findTheOldest = function (people) {
  return people.reduce((previous, current) => {
    if (getAge(current) < getAge(previous)) {
      return previous;
    } else {
      return current;
    }
  });
};

function getAge(person) {
  if (typeof person.yearOfDeath === "undefined") {
    person.yearOfDeath = new Date().getFullYear();
  }
  return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
