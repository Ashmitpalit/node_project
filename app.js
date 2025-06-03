const express = require("express");
const app = express();

app.use(express.json()); // Must come BEFORE routes
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./routers/user_router');
app.use('/', userRoutes);

module.exports = app;
