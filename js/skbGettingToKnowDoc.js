console.log('the document -->')
console.dir(document);

console.log("=======================================")
let body = document.body;
console.log(body);
let children = body.child;
console.log(children);
console.log("=======================================");
// Popular methods with DOCUMENT object

// Document get methods

// document.getElementById('id)
// returns the first element with an id that match the string 'id'
let myHeader = document.getElementById("top-header");
console.log('myHeader');

// document.getElementsByTagName('tagName')
// return an HTMLCollection (array-like) of all elements that match that tag name
let myButtons = document.getElementsByTagName('button')
console.log("myButtons");

// query selector('selector')
// just get first occurrence
let firstCol = document.querySelector(".col-2");
console.log(firstCol);

// document.querySelectorAll('selector')
// return nodelist (array-like)
let allTwoCols = document.querySelectorAll('.col-2')
console.log(allTwoCols);


// create elements with document method
// document.createElement('tagName')


// document.createElement('tagName')
// Create an element with the given tag name
let newHeader = document.createElement('h4');
newHeader.innerHTML = 'Header created by JavaScript'
newHeader.className = 'text-center text-primary'
newHeader.style.backgroundColor = 'red';
console.log(newHeader);
console.dir(newHeader);


// Add our new header to  end of  body
// body.append(newHeader);

// Add to container instead
let myContainer = document.querySelector('.container');
myContainer.append(newHeader);