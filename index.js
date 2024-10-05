const userName = process.argv[2];
const userAge = parseInt(process.argv[3]);
const userCountry = process.argv[4];

function createMessage(name, age, country) {
  let message=`Hello,my name is ${name},i am ${age} years old from ${country}`;
  console.log(message);
}
createMessage(userName, userAge, userCountry);
