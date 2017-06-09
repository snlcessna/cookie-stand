'use strict';
//
 var locations = [
   'First and Pike',
   'SeaTac Aiport',
   'Seattle Center',
   'Capitol Hill',
   'Alki',
];

//
// names[1];

var locationsObject = {
  0: 'First and Pike',
  1: 'SeaTac Airport',
  2: 'Seattle Center',
  3: 'Capitol Hill',
  4: 'Alki',
};

var firstAndPike = {
  minHourlyCust: '23',
  maxHourlyCust: '65',
  avgPerCust: '6.3',
};

var seaTacAirport = {
  minHourlyCust: '3',
  maxHourlyCust: '24',
  avgPerCust: '1.2',
};

var seattleCenter = {
  minHourlyCust: '11',
  maxHourlyCust: '38',
  avgPerCust: '3.7',
};

var capitolHill = {
  minHourlyCust: '20',
  maxHourlyCust: '38',
  avgPerCust: '2.3',
};

var alki = {
  minHourlyCust: '2',
  maxHourlyCust: '16',
  avgPerCust: '4.6',
};

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
