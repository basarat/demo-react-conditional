let person;

person = { name: { first: 'Jane', last: 'Doe' } };
console.log(person && person.name && person.name.first); // 'Jane'

person = null; 
console.log(person && person.name && person.name.first); // null

let shouldDisplay;

shouldDisplay = true;
console.log(shouldDisplay && 'Display'); // 'Display'

shouldDisplay = false;
console.log(shouldDisplay && 'Display'); // false