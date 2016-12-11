/**
 * Created by xieliang on 11/12/2016.
 */

var imserver = function(){

    this.users = new Array();

    this.connections = new Array();

    this.create = function(server){
        
        var io = require('socket.io')(server);

        io.on('connection', function (socket) {

            socket.emit('news', { hello: 'world' });

            socket.on('login', function (data) {
                console.log(data);
            });

            socket.on('private message',function (fff,from,to,msg) {
                console.log(fff);
                console.log(from);
                console.log(to);
                console.log(msg);
            });
        });
    };
};

module.exports = new imserver();
