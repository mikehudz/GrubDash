const router = require("express").Router();
const controller = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router 
    .route("/")
    .get(controller.list)   // handles get requests to '/', returns a list of dishes
    .post(controller.create)                 // handles post requests to '/', creates a new dish (with id)
    .all(methodNotAllowed); 

router  
    .route("/:dishId")
    .get(controller.read)   // handles get requests to '/:dishId', returns specific dish 
    .put(controller.update) // handles put requests to '/:dishId', updates a specific dish
    .all(methodNotAllowed);


module.exports = router;
