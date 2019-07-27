//Problem- 15: Object Equality

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address1 = new Address('Begum Rokeya Sarani', 'Dhaka', 1216);
const address2 = new Address('Begum Rokeya Sarani', 'Dhaka', 1216);

function areEqual(address1, address2) {
    return address1.street === address2.street && 
        address1.city === address2.city && 
        address1.zipCode === address2.zipCode;
}

console.log(areEqual(address1, address2));

function areSame(address1, address2) {
    // if(address1 === address2) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    return address1 === address2;

}
console.log(areSame(address1, address2));
