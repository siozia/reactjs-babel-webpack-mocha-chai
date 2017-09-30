var e = require("react").createElement;
var C = require("create-react-class");
require("./App.css");

var App = C({
    render: function() {
        return e(
            "p",
            {className:"helloWorld"},
            "Hello " + this.props.name);
    }
});

module.exports=App;

