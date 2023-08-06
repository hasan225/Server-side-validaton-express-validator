const express = require("express");
const router = require("./routes/user");

const app = express()
const PORT = 4000

app.listen(PORT, (req, res) => {
    console.log(`server has started at http://localhost:${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", router)

app.get("/", (req, res) => {
    res.status(200).send("hello world")
})
app.get("/api/register", (req, res) => {
    res.send("register page")
})


