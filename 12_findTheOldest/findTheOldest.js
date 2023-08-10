const findTheOldest = function (array) {
    const currentYear = new Date().getFullYear();

    return array.reduce((oldestPerson, person) => {
        if (Object.keys(oldestPerson).length === 0) {
            oldestPerson = person;
        }
        let oldestAge =
            (oldestPerson.hasOwnProperty("yearOfDeath") ? oldestPerson.yearOfDeath : currentYear) - oldestPerson.yearOfBirth;

        let personAge = (person.hasOwnProperty("yearOfDeath") ? person.yearOfDeath : currentYear) - person.yearOfBirth;

        if (personAge > oldestAge) {
            return person;
        }
        else {
            return oldestPerson;
        }
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
