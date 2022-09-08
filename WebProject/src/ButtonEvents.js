function drawLine(canvasId) {
    var c = document.getElementById(canvasId);
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function drawCircle(canvasId) {
    var c = document.getElementById(canvasId);
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawText(canvasId, text) {
    var c = document.getElementById(canvasId);
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText(text, 10, 50);
}
