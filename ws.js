const ws = {
    internalWs,
    handlers: { [messageId]: handler },
    taskHandler,
    idEnumerator: 0,
    ready: false,

    open: (url) => {
        internalWs = new WebSocket(url);
        internalWs.onopen = (openEvent) => {
            ready = true;
        };

        const handleResponse = (messageObj) => {
            messageId = messageObj.id;
            if (handlers[messageId] === undefined || handlers[messageId] === null) return;
            messageHandler = handlers[messageId];
            messageHandler(messageObj);
            delete handlers[messageId];
        };

        const handleTask = (messageObj) => {
            taskHandler(messageObj);
        };

        internalWs.onmessage = (messageEvent) => {
            message = messageEvent.message;
            messageObj = JSON.parse(message);
            if (messageObj.type == "response") {
                handleResponse(messageObj);
            }
            else if (messageObj.type == "task") {
                handleTask(messageObj);
            }
        };
        internalWs.onclose = (closeEvent) => {
            ready = false;
        }
    },

    send: (messageObj, h) => {
        messageObj.id = messageId = idEnumerator++;
        message = JSON.stringify(messageObj);
        internalWs.send(message);
        handlers[messageId] = h;
    }
};

const WS_URL = '';

const getInstanceOfWS = () =>
{
    if(window.ws === undefined || window.ws === null)
    {
        window.ws = new ws(WS_URL);
    }
    return window.ws;
};