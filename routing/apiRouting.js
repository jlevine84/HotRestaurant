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
server.post("api/reservations", (req, res)=>{
    const newBooking = req.body;

    if (reservations.current.length >= 5) {
        reservations.waiting.push(newBooking)
    } else {
        reservations.current.push(newBooking)
    }
})