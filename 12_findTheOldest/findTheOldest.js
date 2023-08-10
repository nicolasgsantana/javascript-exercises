const findTheOldest = function (array) {
    return array.reduce((oldestPerson, person) => {
        if (oldestPerson === 0) {
            oldestPerson = person;
        }
        const currentYear = new Date().getFullYear();
        let oldestAge =
            (oldestPerson.yearOfDeath === 'undefined' ? currentYear : oldestPerson.yearOfDeath) - oldestPerson.yearOfBirth;

        let personAge = (person.yearOfDeath === 'undefined' ? currentYear : person.yearOfDeath) - person.yearOfBirth;

        if (personAge > oldestAge) {
            oldestPerson = person;
        }
    }, 0);
};

// Do not edit below this line
module.exports = findTheOldest;
