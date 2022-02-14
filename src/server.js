import express from "express";
import bodyParse from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";

require('dotenv').config();

let app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log("Backend Nodejs is running on the port: " + port);
});