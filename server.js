const app = require("./src/app");
const { db } = require("./db/connection")
const port = 3000;

const musicianRouter = require("./src/routes/musician");
app.use("/musicians", musicianRouter);

app.listen(port, async () => {
    await db.sync();
    console.log(`Listening at http://localhost:${port}/musicians`)
})