module.exports = function(server, path){
    server.get("/", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
    
    server.get("/booking", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/booking.html"))
    })
    
    server.get("/tables", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/tables.html"))
    })
}

