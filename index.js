//websockets nos permite fazer uma comunicação
//bilateral entre clientes e servidores
var io = require('socket.io')(3000);

io.on('connection', (socket) => {
    console.log('novo usuário conectado')

    socket.on('client_message', (dado)=> {
    io.sockets.emit('server_hello', dado)
    })
});

//.broadcast manda a mensagem para todos os clientes conectados
//io.sockets.emit além do anterior, o cliente também recebe


//http-server 