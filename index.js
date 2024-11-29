const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./route/productRoute");

const app = express();

const port = 9000;

app.use(express.json());

app.use("/api", productRoute);

const live_Uri = "mongodb+srv://EngrHenry:engrakpan@cluster.wavse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"
mongoose.connect(live_Uri)
.then(()=> console.log("MongoDB Connected to this Server"))
.catch(err=> console.error("Connection Error:", err));

app.listen(port, ()=> console.log("Server is up and running on port 9000"))

