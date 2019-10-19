const PORT = process.env.PORT || 8800;
const IP = process.env.IP || "0.0.0.0";
const DBURI =
  "mongodb+srv://yash:hsay@cluster0-mxy94.mongodb.net/test?retryWrites=true&w=majority";
const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connection.openUri(DBURI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

let TopicSchema = new mongoose.Schema({
  title: String,
  description: String
});
let Topic = mongoose.model("Topic", TopicSchema);
let str = `HTML Headings,Headings are defined with the <h1> to <h6> tags. <h1> defines the most important heading. <h6> defines the least important heading.
HTML Paragraphs,The HTML <p> element defines a paragraph.
HTML Links,HTML links are hyperlinks.Hyperlinks are defined with the HTML <a> tag
HTML Comments,Comment tags are used to insert comments in the HTML source code.
HTML Styles - CSS,CSS describes how HTML elements are to be displayed on screen.
Unordered HTML List,An unordered list starts with the <ul> tag. Each list item starts with the <li> tag.
Ordered HTML List,An ordered list starts with the <ol> tag. Each list item starts with the <li> tag.
HTML Block Elements,A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).
HTML Inline Elements,An inline element does not start on a new line and only takes up as much width as necessary.
HTML The class Attribute,The HTML class attribute is used to define equal styles for elements with the same class name.
HTML The id Attribute,The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
HTML JavaScript,JavaScript makes HTML pages more dynamic and interactive.
HTML Form,The HTML <form> element defines a form that is used to collect user input:
HTML5 Canvas,The HTML <canvas> element is used to draw graphics on the fly via JavaScript.`;
let arr = str.split("\n");
arr = arr.map(item => {
  return { title: item.split(",")[0], description: item.split(",")[1] };
});
// arr.forEach(item => {
//   Topic.create(
//     { title: item.title, description: item.description },
//     created => {
//       console.log(created);
//     }
//   );
// });
Topic.find({}, function(err, founded) {
  console.log(founded);
});
app.get("*", function(req, res) {
  res.send("404 URL NOT FOUND");
});
app.listen(PORT, IP, () => {
  console.log("Server started!");
});
