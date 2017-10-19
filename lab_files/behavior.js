console.clear();

// ---------------------------------------------
// Task 1
// ---------------------------------------------
divNode = document.getElementById('fiddle');
// ---------------------------------------------
// Task 2
// ---------------------------------------------
pNode = document.createElement('p');
pTextNode = document.createTextNode("CSCI 215: Lab 5 Todo");
pNode.appendChild(pTextNode);
divNode.appendChild(pNode);

// ---------------------------------------------
// Task 3
// ---------------------------------------------
hrNode = document.createElement('hr');
divNode.appendChild(hrNode);

// ---------------------------------------------
// Task 4
// ---------------------------------------------
olNode = document.createElement('ol');
liNode1 = document.createElement("li");
liNode2 = document.createElement("li");
liTextNode1 = document.createTextNode("Read Assignment");
liTextNode2 = document.createTextNode("Code Assignment");
liNode1.appendChild(liTextNode1);
liNode2.appendChild(liTextNode2);
olNode.appendChild(liNode1);
olNode.appendChild(liNode2);
divNode.appendChild(olNode);

// ---------------------------------------------
// Task 5
// ---------------------------------------------
imgNode = document.createElement("img");
srcAttr = document.createAttribute('src');
srcAttr.value = 'http://munsellb.people.cofc.edu/img/prettypicture.jpg';
imgNode.appendChild(srcAttr);
divNode.appendChild(imgNode);



