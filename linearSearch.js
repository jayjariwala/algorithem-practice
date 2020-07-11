const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

/*** Some of the JavaScript method that has linear search implemented**** */
// visit 1 item at a time
// - indexOf()
// - Includes()
// - find()
// - findIndex()

function linearSearch(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element === search) {
      return i;
    }
  }
  return -1;
}

const resultIndex = linearSearch(states, "New Jersey");
console.log(states[resultIndex]);