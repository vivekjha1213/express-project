const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

// const swaggerUi=require('swagger-ui-express');
// const swaggerDocument=require('./swagger.json');





connectDb();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);


// app.use(
//   '/api-docs',
//   swaggerUi.serve, 
//   swaggerUi.setup(swaggerDocument)
// );

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});