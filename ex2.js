const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21
}

const getFullName = (person) => {
    return person.firstName + ' ' + person.lastName;
}

const upperCaseProxy = new Proxy(getFullName, {
    apply(target, thisArg, args) {
        return target(...args).toUpperCase();
    }
});

console.log(getFullNameInUpperCase(upperCaseProxy));
