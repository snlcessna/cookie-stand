'use strict';
//

var locationsObject = {
  0: 'First and Pike',
  1: 'SeaTac Airport',
  2: 'Seattle Center',
  3: 'Capitol Hill',
  4: 'Alki',
};

var firstAndPike = {
  location: '1st and Pike',
  minHourlyCust: '23',
  maxHourlyCust: '65',
  avgPerCust: '6.3',
  workingHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
};

var seaTacAirport = {
  location : 'SeaTac Airport',
  minHourlyCust : '3',
  maxHourlyCust: '24',
  avgPerCust: '1.2',
  workingHours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
};

var seattleCenter = {
  location: 'Seattle Center',
  minHourlyCust: '11',
  maxHourlyCust: '38',
  avgPerCust: '3.7',
  workingHours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
};

var capitolHill = {
  location: 'Captiol Hill',
  minHourlyCust: '20',
  maxHourlyCust: '38',
  avgPerCust: '2.3',
  workingHours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
};

var alki = {
  location: 'Alki',
  minHourlyCust: '2',
  maxHourlyCust: '16',
  avgPerCust: '4.6',
  workingHours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
};

var hourlySales = function(minHourlyCust, maxHourlyCust, avgPerCust) {
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgPerCust = avgPerCust;
};

hourlySales.generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

hourlySales.generateRandom(minHourlyCust, maxHourlyCust);
//console.log(.generateRandom(1, 5));
console.log(hourlySales.generateRandom(1, 5));


locations.minHourlyCust = function(){
  console.log('Minimum customers per hour at ' + locationName + ' is ' + minHourlyCust + '.');
};

//
// user.login = function(){
//   console.log('The user has logged in!!!');
// };
//
// user.logOut = function(){
//   console.log('The user has logged out...');
// };
//
// console.log('Users Info - first name: ' + user.firstName);
// console.log('Users Info - last name: ' + user.lastName);
// console.log('Users Info - email: ' + user.email);
// console.log('Users Info - age: ' + user.age);
// console.log('Users Info - pets: ' + user.pets);
//
// user.hasCuteDog = true;
// // user.fullName = 'Adam Wallraff';
// user.firstName = 'Bob';
//
// user.fullName = user.firstName + ' ' + user.lastName;
//
//
// console.log('Users Info - full name: ' + user.fullName);
//
//
// console.log('Users Info - is their dog cute?: ' + user.hasCuteDog);
//
// console.log('USER: ' + user);
// console.log(user);
//
// user.login();


var ulElement = document.getElementById('primary-list');
console.log(ulElement);

for (var i = 0; i < 1000; i++) {
  var listItemElement = document.createElement('li');

  listItemElement.textContent = 'This is item ' + i;

  ulElement.appendChild(listItemElement);
  console.log(ulElement.children);
}
