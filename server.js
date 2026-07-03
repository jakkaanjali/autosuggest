const express = require('express')
const app = express()
const PORT = 3002;
const PORT=process.env.PORT || 3002;
app.use(express.static("frontend"));

app.listen(PORT, function() {
    console.log("Successfully running at https://localhost:" + PORT)
})