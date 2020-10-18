const express = require("express");
const app = express();
app.use(express.static("public"));
require("dotenv").config({ path: "dev.env" });
require("./routes")(app);
app.listen(process.env.APP_PORT, () => {
    console.clear();
    console.log("*.*.* Site AGWORKS *.*.*");
    console.log(`*.*.* Aplicação sendo executada em ${process.env.APP_HOST}:${process.env.APP_PORT} *.*.* `);
});