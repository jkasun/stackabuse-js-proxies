const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21
}

const handler = {
    get(target, property) {
        if (property[0] === '_') {
            throw new Error(`${property} is a private attribute`);
        }

        return target[property];
    },
    
    set(target, property, value) {
        if (property === 'age') {
            if (!typeof value == 'number') {
                throw new Error('Age should be a number');
            }

            if (value < 0 || value > 150) {
                throw new Error("Age value should be in between 0 and 150");
            }
        }

        target[property] = value;
    },
    
    deleteProperty(target, property) {
        console.log('you have deleted', property);
        delete target[property];
    }
}

const proxyPerson = new Proxy(person, handler);

delete proxyPerson.age;