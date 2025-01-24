const express = require('express');
const app = express();
const port = 3005;
const postsRouter = require("./routers/postsRouter.js");
const errorsHandler = require("./middleware/errorsHandler.js");

// Middleware global
app.use(express.static("public"));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server del mio Blog')
})

app.get("/bacheca", (req, res) => {
    res.json(posts)
});

app.use("/posts", postsRouter);

// Middleware errori
app.use(errorsHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
