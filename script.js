// const ws = new WebSocket("wss://chatserver123.azurewebsites.net/chat");
// let message = document.getElementById("message-input");
// let send_button = document.getElementById("send-button");
// ws.onopen = function()
// {
//     console.log("opended");
// }
// ws.onclose = function()
// {
//     console.log("opended");
// }
// ws.onerror = function(value)
// {
//     console.log(value);
// }
// ws.onmessage = function()
// {
//     console.log("opended");
// }
// const ws = new WebSocket("wss://chatserver1.azurewebsites.net");
let ws = new WebSocket("wss://chatserver123.azurewebsites.net/chat")
let messageInput = document.getElementById("message-input");
let sendButton = document.getElementById("send-button");
// let receivedMessage = document.getElementById("received-message");

ws.onopen = function(event) {
    console.log("WebSocket connected");

};

ws.onmessage = function(event) {
    console.log(event);
};

ws.onclose = function(event) {
    console.log("WebSocket closed");
};

ws.onerror = function(event) {
    // console.error("WebSocket error:", event);
    console.log("error");
    console.log(event)
};

function sendActionHandler() {
    
    const message = messageInput.value;
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(message);
        messageInput.value = "";
    }
}

sendButton.addEventListener("click", sendActionHandler);

// function onmessage()
// {
    
// }

// function sendActionHandler()
// {
//     console.log(ws.readyState);
// }
// send_button.addEventListener("click",sendActionHandler);