'use strict';
//

function customerNumber(store) {
  return Math.floor(Math.random() * ((store.maxCustHour + 1) - store.minCustHour) + store.minCustHour);
}

function cookieCountAll() {
  for(var i = 0; i < allStores.length; i++) {
    cookieCount(allStores[i]);
  }
}

function cookieCount(store) {
  cookiesPerHour(store);
  cookiesTotal(store);
  printSales(store);
}

function cookiesPerHour(store) {
  for (var i = 0; i < store.hoursOpen.length; i++) {
    store.cookiesPerHour.push(Math.floor(store.avgCustConsumed * customerNumber(store)));
  }
}

function cookiesTotal(store) {
  var totalCookies = 0;
  for(var i = 0; i < store.hoursOpen.length; i++) {
    totalCookies = totalCookies + store.cookiesPerHour[i];
    console.log('Total cookies = ' + totalCookies);
    //console.log(store.cookiesPerHour[i] + ' per hour cause I want to see them.');
  }
  store.totalCookies = totalCookies;
  console.log(store.totalCookies);
}

function printSales(store){
  //Step 1 - Create Element
  var newRowEl = document.createElement('generated-table');

  //Step 2 - Manipulate the data
  for(var i = 0; i < store.hoursOpen.length; i++) {
    var hoursOpenEl = document.createElement('th');
    hoursOpenEl.textContent = store.hoursOpen[i];
    newRowEl.appendChild(hoursOpenEl);
  }

  var storeLocationEl = document.createElement('td');
  storeLocationEl.textContent = store.location;
  newRowEl.appendChild(storeLocationEl);

  var cookiesPerHourEl = document.createElement('td');
  cookiesPerHourEl.textContent = store.cookiesPerHour;
  newRowEl.appendChild(cookiesPerHourEl);

  var totalCookiesPerHourEl = document.createElement('td');
  totalCookiesPerHourEl.textContent = store.totalCookies[i];
  newRowEl.appendChild(totalCookiesPerHourEl);

  //append to the dom
  tableBodyEl.appendChild(newRowEl);

}

function Store(location, minCustHour, maxCustHour, averageCustomerCookies) {
  this.location = location;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCustConsumed = averageCustomerCookies;
  this.cookiesPerHour = [],
  this.totalCookies = 0,
  this.hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
}

var firstAndPikeStore = new Store('1st and Pike', 23, 65, 6.3);
var seaTacStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seaCenterStore = new Store('Seattle Center', 11, 38, 3.7);
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);

var allStores = [firstAndPikeStore, seaTacStore, seaCenterStore, capitolHillStore, alkiStore];

var tableEl = document.getElementById('generated-table');
var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);

for (var i = 0; i < allStores.length; i++) {
  printSales(allStores[i]);
}

cookieCountAll();
