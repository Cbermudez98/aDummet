import express from "express";
import HttpResponse from "../shared/HttpResponse.js";

export default class UserRoute {
    constructor() {
        this.app = express();
        this.httpResponse = new HttpResponse();
    }

    routes() {
        this.app.get("/", (req, res) => {
            this.httpResponse.response(Promise.resolve({ hello : "World" }), req, res);
        });

        return this.app;
    }
}