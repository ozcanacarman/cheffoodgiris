
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
 

require('dotenv').config();

 const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
mongoose.connect(
    "mongodb+srv://cheffood:5208514.ozc.@cluster0.k9kuh.mongodb.net/cheffood?retryWrites=true&w=majority",
     { 
    useNewUrlParser: true, 
    useCreateIndex: true 
}
);
 
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const RestorantsRouter = require('./routes/Restorant');
 
app.use(cors());

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
      res.send(200);
  } else {
      next();
  }
};
app.use(allowCrossDomain);

app.options('*', cors());


app.use("/Restorantlar", RestorantsRouter);

 
 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});