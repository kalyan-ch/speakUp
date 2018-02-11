$(document).ready(function() {
    var socket = io();
    $("form").submit(function(){
        socket.emit("sendMsg", $("#msgTxt").val());
        $("#msgTxt").val("");
        return false;
    });

    socket.on("message", function(txt){
        $("#listMsgs").append("<li>"+txt+"</li>")
    })

});

