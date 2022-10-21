var selectedObject = null;

function drawLine(canvasId) {
    let c = document.getElementById(canvasId);
    let ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function drawRectangleClicked() {
    $("canvas").drawRect({
        layer: true,
        draggable: true,
        name: "myBox",
        fillStyle: "#585",
        x: 100,
        y: 100,
        width: 100,
        height: 50,
        click: function (layer) {
            displayProperties(layer, false);
        },
        dragstop: function (layer) {
            layer.draggable = true;
        },
    });
}

function drawCircleClicked(canvasId) {
    $("canvas").drawEllipse({
        layer: true,
        draggable: true,
        name: "circle",
        fillStyle: "#585",
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        click: function (layer) {
            displayProperties(layer, false);
        },
        dragstop: function (layer) {
            layer.draggable = true;
        },
    });
}

function drawText(canvasId, text) {
    let c = document.getElementById(canvasId);
    let ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText(text, 10, 50);
}

function clearCanvas(canvasId, text) {
    if (confirm("Are you sure you want to clear the canvas?")) {
        let c = document.getElementById(canvasId);
        let ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
    }
}

function displayProperties(layer, isText) {
    $("#properties").css("display", "inline-block");
    if (isText) {
        $("#text").css("display", "block");
    } else {
        $("#text").css("display", "none");
    }
    //TODO, set values in #properties based on layer.
}
