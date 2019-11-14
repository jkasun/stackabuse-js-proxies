const person = {
    firstName: 'John',
    lastName: 'Doe'
}

const handler = {
    get(target, property) {
        if (property === 'fullName') {
            return target.firstName + ' ' + target.lastName;
        }
        
        return target[property];
    }
}

const proxyPerson = new Proxy(person, handler);

console.log(proxyPerson.fullName);