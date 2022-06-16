console.log('Hello this is the main.js');



console.log(document);
let body = document.body;
console.log(body);
let children = document.body.children;
console.log(children);
let navBar = children[0];
console.log(navBar);


/*
    Popular document methods
*/

// document.getElementById('id')
// returns the first element with an id that matches the string id
let myHeader = document.getElementById('top-header');
console.log(myHeader);

// document.getElementsByTagName('tagName')
// returns an HTMLCollection (Array) of elements that match the tag name
let myButtons = document.getElementsByTagName('button');
console.log(myButtons);

// document.getElementsByClassName('className')
// returns an HTMLCollection (Array) of elements that match the class name
let myRows = document.getElementsByClassName('row');
console.log(myRows);

// document.querySelector('selectors')
// returns the first element that matches the specified selector or group of selectors
let firstCol = document.querySelector('.col-2');
console.log(firstCol);

let divInNav = document.querySelector('.navbar div')
console.log(divInNav)

// document.querySelectorAll('selectors')
// returns a NodeList (Array) of elements that match the specified selector or group of selectors
let allTwoCols = document.querySelectorAll('.col-2');
console.log(allTwoCols);

let allDivsInNav = document.querySelectorAll('.navbar div')
console.log(allDivsInNav)


// document.createElement(tagName)
// Creates an element with the given tag name
let medHeader = document.createElement('h4');
medHeader.innerHTML = 'Created by JavaScript & The Kekambas'; 
console.log(medHeader);
medHeader.className = 'text-center';

