//Problem - 13: Address Object

const address = {
    street: 'Begum Rokeya Sarani',
    city: 'Dhaka',
    zipCode: 1216
};

function showAddress(address) {
    for(let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);