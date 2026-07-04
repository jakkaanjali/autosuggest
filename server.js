const express = require('express')
const app = express()
const PORT=process.env.PORT || 3002;
console.log("backend");
app.use(express.static("frontend"));

app.listen(PORT, function() {
    console.log("Successfully running at https://localhost:" + PORT)
})
//https://randomuser.me/api/