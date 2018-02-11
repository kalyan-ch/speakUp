var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/styles.css", function (req, res) {
    res.sendFile(__dirname + "/styles.css");
});

app.get("/scripts.js", function (req, res) {
    res.sendFile(__dirname + "/scripts.js");
});

io.on("connection", function(socket){
    socket.on("sendMsg", function(msgTxt){
        io.emit("message", msgTxt);
    });
});

http.listen(process.env.PORT || 3000, function(){
    console.log("Server running at port: 3000");
});


