let form = document.getElementById('form');
let ul = document.getElementById('list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  createListItem();
  form.reset();
});

function createListItem() {
  let $this = this;
  let item = document.getElementById('inputText').value;
  let $li = document.createElement('li');
  let itemsDiv = document.createElement('div');
  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.className = 'myCheckbox';


  let actionsDelete = document.createElement('button');
  actionsDelete.innerText = 'Delete';

  let actionsMoveUp = document.createElement('button');
  actionsMoveUp.innerText = 'Move Up';
  actionsMoveUp.setAttribute('name', 'moveUp');

  let actionsMoveDown = document.createElement('button');
  actionsMoveDown.innerText = 'Move Down';
  actionsMoveDown.setAttribute('name', 'moveDown');

  actionsDelete.addEventListener('click', DeleteElement);
  actionsMoveUp.addEventListener('click', MoveUp);
  actionsMoveDown.addEventListener('click', MoveDown);

  itemsDiv.innerText = item;
  $li.appendChild(itemsDiv);
  $li.appendChild(checkBox);
  $li.appendChild(actionsDelete);
  $li.appendChild(actionsMoveUp);
  $li.appendChild(actionsMoveDown);
  ul.appendChild($li);
}

function MoveUp(e) {
  e.preventDefault();
  let currentElement = this.parentNode;
  let previousElement = currentElement.previousSibling;

  swapElements(currentElement, previousElement);
}

function MoveDown(e) {
  e.preventDefault();
  let currentElement = this.parentNode;
  let nextElement = currentElement.nextSibling;

  swapElements(nextElement, currentElement);
}

function swapElements(obj1, obj2) {
  if (obj2.nextSibling == obj1) {
    obj1.parentNode.insertBefore(obj2, obj1.nextSibling);
  } else {
    obj1.parentNode.insertBefore(obj2, obj1);
  }
}

function DeleteElement(e) {
  e.preventDefault();
  let $this = this;
  let currentElement = $this.parentNode;
  currentElement.parentNode.removeChild(currentElement);
}

/*======================================================================================*/

/*--- CALCULATOR --*/

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9 , \/\*\-\+\.]/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
var result = document.getElementById('result'),
  zero = document.getElementById('zero'),
  one = document.getElementById('one'),
  two = document.getElementById('two'),
  three = document.getElementById('three'),
  four = document.getElementById('four'),
  five = document.getElementById('five'),
  six = document.getElementById('six'),
  seven = document.getElementById('seven'),
  eight = document.getElementById('eight'),
  nine = document.getElementById('nine'),
  division = document.getElementById('Division'),
  multiplication = document.getElementById('Multiplication'),
  subtraction = document.getElementById('Subtraction'),
  dot = document.getElementById('dot'),
  equal = document.getElementById('equal'),
  addition = document.getElementById('Addition'),
  on = document.getElementById('on'),
  off = document.getElementById('off'),
  del = document.getElementById('del');
zero.onclick = function() {
  'use strict';
  result.value += 0;
  result.focus();
}
one.onclick = function() {
  'use strict';
  result.value += 1;
  result.focus();
};
two.onclick = function() {
  'use strict';
  result.value += 2;
  result.focus();
}
three.onclick = function() {
  'use strict';
  result.value += 3;
  result.focus();
}
four.onclick = function() {
  'use strict';
  result.value += 4;
  result.focus();
}
five.onclick = function() {
  'use strict';
  result.value += 5;
  result.focus();
}
six.onclick = function() {
  'use strict';
  result.value += 6;
  result.focus();
}
seven.onclick = function() {
  'use strict';
  result.value += 7;
  result.focus();
}
eight.onclick = function() {
  'use strict';
  result.value += 8;
  result.focus();
}
nine.onclick = function() {
  'use strict';
  result.value += 9;
  result.focus();
}
dot.onclick = function() {
  'use strict';
  result.value += '.';
  result.focus();
}
addition.onclick = function() {
  'use strict';
  result.value += '+';
  result.focus();
}
subtraction.onclick = function() {
  'use strict';
  result.value += '-';
  result.focus();
}
multiplication.onclick = function() {
  'use strict';
  result.value += '*';
  result.focus();
}
division.onclick = function() {
  'use strict';
  result.value += '/';
  result.focus();
}
on.onclick = function() {
  'use strict';
  result.value = '';
  result.focus();
}
off.onclick = function() {
  'use strict';
  result.value = '';
  result.blur();
}
del.onclick = function() {
  'use strict';
  result.value = result.value.substr(0, result.value.length - 1);
  result.focus();
}
equal.onclick = function() {
  'use strict';
  result.value = eval(result.value);
  result.focus();
}


