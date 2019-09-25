const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://apipicpay:picpay@cluster0-tiqcl.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);
app.use(express.json());

app.use(require("./routes"));

app.listen(3000, () => {
  console.log("Rodando");
});
