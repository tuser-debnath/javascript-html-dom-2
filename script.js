// querySelector

// Example One (Tag)
const tag1 = document.querySelector("h1");
console.log(tag1);

// Example Two (Class)
const class1 = document.querySelector(".class1");
console.log(class1);

// Example Three (Id)
const id1 = document.querySelector("#id1");
console.log(id1);

// querySelectorAll

// Example One (Tag)
const tag2 = document.querySelectorAll("h1");
console.log(tag2);
// console.log(tag2[1]);

// Example Two (Class)
const class2 = document.querySelectorAll(".class1");
console.log(class2);

// Difference Between HTML Collection & NodeList

// HTML Collection
const html1 = document.getElementsByClassName("class1");
console.log(html1);

// NodeList
const node1 = document.querySelectorAll(".class1");
console.log(node1);

// childNodes
const id3 = document.getElementById("id1");
console.log(id3);
console.log(id3.childNodes);

// children
const listId = document.getElementById("list-id");
console.log(listId);
console.log(listId.children);

// createElement
const list1 = document.createElement("li");
list1.innerHTML = "List 5";
console.log(list1.innerHTML);

// appendChild

// Example One
const newList = document.createElement("li");
newList.innerHTML = "List 5";
const updateList = document.getElementById("list-id");
updateList.appendChild(newList);

// Example Two
const updateList2 = document.getElementById("text");
console.log(updateList2);
const newText = document.createElement("h2");
newText.innerText = "This is a Heading";
updateList2.appendChild(newText);

// removeChild
const remCld = document.getElementById("list-id");
const remCld2 = remCld.children[2];
console.log(remCld2.innerHTML);
remCld.removeChild(remCld2);

// replaceChild
const repCld1 = document.getElementById("list-id");
const repCld2 = repCld1.children[1];
console.log(repCld2.innerHTML);
const repNew = document.createElement("li");
repNew.innerHTML = "New List";
console.log(repNew.innerHTML);
repCld1.replaceChild(repNew, repCld2);

// Title
console.log(document.title);
document.title = "New JavaScript Title";

// Body
console.log(document.body);
document.body.innerHTML = "<h2>This is a new JavaScript Heading!</h2>";
