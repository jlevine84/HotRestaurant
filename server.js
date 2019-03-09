const express = require("express");
const path = require("path")
const reservations = require("./api/reservations")

const server = express();
const PORT = 8080;

server.use(express.urlencoded({ extended: true}));
server.use(express.json());

//HTML ROUTING
server.get("/", (res, req)=>{
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

server.get("/booking", (res, req)=>{
    res.sendFile(path.join(__dirname, "/public/booking.html"))
})

server.get("/tables", (res, req)=>{
    res.sendFile(path.join(__dirname, "/public/tables.html"))
})

//API ROUTING GET METHODS
server.get("/api/reservations", (req, res)=> {
    return res.json(reservations)
})

server.get("/api/reservations/waiting", (req, res)=>{
    return res.json(reservations.waiting)
})

server.get("/api/reservations/current", (req, res)=>{
    return res.json(reservations.current)
})

//API ROUTING POST METHODS
server.post("/api/reservations", (req, res)=>{
    const newBooking = req.body;
    console.log(newBooking)
    if (reservations.current.length >= 5) {
        reservations.waiting.push(newBooking)
    } else {
        reservations.current.push(newBooking)
    }

    res.json(newBooking)
})

server.listen(PORT, ()=> {
    console.log(`Listening on Port: ${PORT}`)
})