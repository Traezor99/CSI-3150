var selectedIndex = 0;

//From https://stackoverflow.com/a/5624139
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

//Input must be a 3 digit hex string, including the # at the start
function expandShortHex(shortHex) {
    let shortHexDigits = shortHex.replace("#", "");
    let hexChars = shortHex.replace("#", "").split("");
    if (hexChars.length == 3)
        return (
            "#" +
            hexChars[0] +
            hexChars[0] +
            hexChars[1] +
            hexChars[1] +
            hexChars[2] +
            hexChars[2]
        );
    else return shortHex;
}

//From https://stackoverflow.com/a/5624139
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

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
        name: "myBox",
        fillStyle: "#585",
        x: 100,
        y: 100,
        width: 100,
        height: 50,
        click: function (layer) {
            displayProperties(layer, false);
        },
    });
}

function drawEllipseClicked(canvasId) {
    $("canvas").drawEllipse({
        layer: true,
        name: "circle",
        fillStyle: "#654",
        strokeStyle: "#000",
        strokeWidth: "3",
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        click: function (layer) {
            displayProperties(layer, false);
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
        $("canvas").removeLayers();
    }
}

function displayProperties(layer, isText) {
    selectedIndex = layer.index;

    $("#properties").css("display", "inline-block");

    if (isText) {
        $("#text").css("display", "block");
        $("#text").val(layer.text);
    } else {
        $("#text").css("display", "none");
    }

    //console.log($("#fillColorID"));
    $("#widthID").val(layer.width);
    $("#heightID").val(layer.height);
    $("#borderWidthID").val(layer.strokeWidth);
    $("#borderColorID").val(expandShortHex(layer.strokeStyle));
    $("#fillColorID").val(expandShortHex(layer.fillStyle));
    //Need to convert colors to RGB, then back to hex for setting the style
    //TODO, set values in #properties based on layer.
}

function applyPropertiesClicked() {
    $("canvas").setLayer(selectedIndex, {
        width: $("#widthID").value,
        height: $("#heightID").value,
        strokeWidth: $("#borderWidthID").value,
        strokeStyle: $("#borderColorID").value,
        fillStyle: $("#fillColorID").value,
        text: $("#text").value,
    });
}
