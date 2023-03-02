import express from "express";
import UserRoute from "./users/index.js";

export default class Index {
  constructor() {
    this.app = express();
    this.app.use("/user", new UserRoute().routes());
  }

  initServe() {
    this.app.listen(3000, () => console.log("Server running at port", 3000));
  }
}

try {
  const index = new Index();
  index.initServe();
} catch (error) {
  console.error(error);
}
