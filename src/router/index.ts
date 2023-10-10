import *as express from "express";
import authentiation from "./authentiation";
import users from "./users";
const router = express.Router();

export default (): express.Router => {
    authentiation(router);
    users(router);
    return router;
};