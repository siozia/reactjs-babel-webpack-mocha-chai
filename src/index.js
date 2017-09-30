var ReactDom = require("react-dom");
var e = require("react").createElement;
var App = require("./components/App.js");


ReactDom.render(
    e(App,{name:"World"}),
    document.getElementById("app")
);