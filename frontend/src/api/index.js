var socket = new WebSocket('ws://localhost:9000/ws');

let connect = (cb) => {
    console.log("Bağlanılıyor...");

    socket.onopen = () => {
        console.log("Başarıyla Bağlanıldı...");
    }

    socket.onmessage = (msg) => {
        console.log("Websocket'den Mesaj:", msg);
    }

    socket.onclose = (event) => {
        console.log("soket kapalı bağlantı:", event)
    }

    socket.onerror = (error) => {
        console.log("socket error:", error)
    }
};

let sendMsg = (msg) => {
    console.log("msg gönderiliyor...:", msg);
    socket.send(msg);
}

export { connect, sendMsg };