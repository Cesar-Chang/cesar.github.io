let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/edge.png') {
    myImage.setAttribute('src', 'images/edge2.png');
  } else {
    myImage.setAttribute('src', 'images/edge.png');
  }
}

function setHeading(name) {
  let myHead = document.querySelector('h1');
  myHead.textContent = 'Mozilla is awesome, ' + name + '!';
}

function setUsername() {
  let myName = prompt('Please enter your name ~');
  localStorage.setItem('name', myName);
  setHeading(myName);
}

let storedName = localStorage.getItem('name');
if (!storedName) {
  setUsername();
} else {
  setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUsername;