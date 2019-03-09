//HTML ROUTING GET METHODS
server.get("/", (res, req)=>{
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

server.get("/booking", (res, req)=>{
    res.sendFile(path.join(__dirname, "/public/booking.html"))
})

server.get("/tables", (res, req)=>{
    res.sendFile(path.join(__dirname, "/public/tables.html"))
})