const express = require("express");
require("./db/mongoose");

//import User routers
const createUserRoute = require("./routers/users_route/createUser");
const listAllUsers = require("./routers/users_route/listUsers");
const getUserRoute = require("./routers/users_route/getUser");
const updateUserRoute = require("./routers/users_route/updateUser");
const deleteUserRoute = require("./routers/users_route/deleteUser");

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

//User's Router
app.use(createUserRoute);
app.use(listAllUsers);
app.use(getUserRoute);
app.use(updateUserRoute);
app.use(deleteUserRoute);


module.exports = app;
