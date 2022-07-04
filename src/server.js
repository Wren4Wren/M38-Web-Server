const express = require("express"); //Importing entire express library
const app = express(); //Creating app object - houses our server instructions
const port = process.env.PORT || 5001; // Declaring an environmental variable that specifies the port as a default

app.use("/static", express.static("public")); //Telling app to use the public folder, when a request is made to /static

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
// Listening on localhost:5001 for requests to our webserver
