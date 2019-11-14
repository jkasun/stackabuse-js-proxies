const people = [
    {
        id: 1,
        name: 'John Doe',
        age: 21
    },
    {
        id: 2,
        name: 'Ann Clair',
        age: 24
    },
    {
        id: 3,
        name: 'Sherlock Holmes',
        age: 35
    }
];

const proxyPeople = new Proxy(people, {
    get(target, property) {
        if (property.startsWith('getBy')) {
            let prop = property.replace('getBy', '');
            prop = prop[0].toLowerCase() + prop.substring(1);

            return function (value) {
                for (let i of target) {
                    if (i[prop] === value) {
                        return i;
                    }
                }
            }
        }

        return target[property];
    },
});

console.log(proxyPeople.getById(1));
console.log(proxyPeople.getByName('Ann Clair'));
console.log(proxyPeople.getByAge(35));

