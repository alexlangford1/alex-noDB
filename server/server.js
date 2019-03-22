const express = require("express");

const vc = require("./controller/vacationCtrl");
const app = express();
const port = 5555;

app.use(express.json());

app.get("/api/vacation", vc.get);
app.post("/api/vacation", vc.create);
app.delete("/api/vacation/:id", vc.delete);
app.put("/api/vacation/:id", vc.edit);


app.listen(port, () => console.log(`lets do this on port ${port}`));
