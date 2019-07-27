// Problem - 14 : Factory And Constructor Function

/*create a address object:::
const address = {
    street: 'Begum Rokeya Sarani',
    city: 'Dhaka',
    zipCode: 1216
};*/

//factory function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

const address = createAddress('Begum Rokeya Sarani', 'Dhaka', 1216);
console.log(address);

//constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address2 = new Address('Begum Rokeya Sarani', 'Dhaka', 1216);
console.log(address2);