require("./index.css");
// document.write("<p>hello world</p>");
var p = document.createElement("p");
var app = document.getElementById("app");
p.appendChild(document.createTextNode("hello world"));
app.appendChild(p);
console.log("Load ended");