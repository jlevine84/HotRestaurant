module.exports = function(server, express, reservations) {
    server.use(express.urlencoded({ extended: true}));
    server.use(express.json());
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
}