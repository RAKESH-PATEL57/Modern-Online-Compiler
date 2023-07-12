const express = require("express")
const app = express()
const bodyP = require("body-parser")

app.use(bodyP.json())
app.use("/codemirror-5.65.13", express.static("D:/html,css,javascript projects/Online Compiler/codemirror-5.65.13"))

app.use("/", function (req, res){
    res.sendFile("D:/html,css,javascript projects/Online Compiler/index.html")
})

app.listen(8000)