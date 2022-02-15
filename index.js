const express = require("express")
const app = express()
const PORT = process.env.PORT ?? 9090
const mongoose = require("mongoose")
const api = require("./routes/api")

app.use(express.json())


app.use("/api", api)


require("dotenv").config()
mongoose.connect(process.env.DB_CONNECTION, ()=> {
    console.log("connected to db");
})



app.get("/", (req, res) =>{
    res.send("<h1 style='color: red;'>Hello Express API</h1>")
})



app.listen(PORT, ()=> {
    console.log("Server is running on port http://localhost:"+PORT);
})