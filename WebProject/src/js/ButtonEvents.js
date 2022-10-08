function drawLine(canvasId) {
    let c = document.getElementById(canvasId);
    let ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function drawCircle(canvasId) {
    let c = document.getElementById(canvasId);
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
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
