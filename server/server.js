const express = require("express")
const app = express();
const cors = require('cors');
const mongoose = require("mongoose")

app.use(express.json())
app.use(cors());

app.use("/property",require("./routes/propertyRoutes"));
app.use("/task",require("./routes/taskRoutes"));

mongoose.connect("mongodb://localhost:27017/FSA")
.then((res)=>console.log("Appliation server and MongoDb server is connected by mongoose package"))
.catch((err)=>console.log(err)
)

app.listen(5000, ()=>{console.log("Server is up and running")})

