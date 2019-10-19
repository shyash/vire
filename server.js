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

app.get('/get/topics',(req,res)=>{
  Topic.find({}, function(err, founded) {
  res.json(founded);
});
})

app.get("*", function(req, res) {
  res.send("404 URL NOT FOUND");
});
app.listen(PORT, IP, () => {
  console.log("Server started!");
});
