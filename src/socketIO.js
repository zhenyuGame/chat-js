cczy = cczy || {};

cczy.socket = cc.Class.extend({

    ctor : function(){

        var SocketIO = SocketIO || window.io;
        var socketIO = SocketIO.connect('127.0.0.1:8080');
        //this.socketIO = socketIO;

        var self = this;
        socketIO.on('connect',function(data){

            cc.log("连接服务器成功...")
        });
    }
});