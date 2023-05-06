const mongoose = require("mongoose");

//!   Establishing connection
const url =
  // "mongodb+srv://Revinfotech:rev123@cluster0.xtzktpq.mongodb.net/?retryWrites=true&w=majority";
  "mongodb+srv://mobigic:redkar123@cluster0.5yds3yj.mongodb.net/";
//creating a default connection to mongodb
mongoose.connect(url, (err) => {
  if (err) console.log("could not connected to db ", err);
  else console.log("connected to mobigic  db");
});

const conn = mongoose.connection;

conn.on("disconnected", () => {
  console.log("disconnected from mobigic  db");
});

conn.on("error", (err) => {
  console.log("could not connected to mobigic  db", err);
});
