import express from "express";
import homePageController from "./../controllers/homePageController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homePageController.handleHelloWorld);

    return app.use("/", router);
};
module.exports = initWebRoutes;
