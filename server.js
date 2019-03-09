const express = require("express");
const path = require("path")
const reservations = require("./api/reservations")
const htmlRoute = require("./routing/htmlRouting")
const apiRoute = require("./routing/apiRouting")

const server = express();
const PORT = 8080;

htmlRoute(server, path)
apiRoute(server, express, reservations)


server.listen(PORT, ()=> {
    console.log(`Listening on Port: ${PORT}`)
}) 