document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


const canvas = document.getElementById('myCanvas')

function keyDownHandler(e) {
    if ("code" in e) {
        switch(e.code) {
            case "Unidentified":
                break;
            case "ArrowRight":
            case "Right": // IE <= 9 and FF <= 36
            case "KeyD":
                rightPressed = true;
                return;
            case "ArrowLeft":
            case "Left": // IE <= 9 and FF <= 36
            case "KeyA":
                leftPressed = true;
                return;
            case "ArrowUp":
            case "Up": // IE <= 9 and FF <= 36
            case "KeyW":
                upPressed = true;
                return;
            case "ArrowDown":
            case "Down": // IE <= 9 and FF <= 36
            case "KeyS":
                downPressed = true;
                return;
            case "KeyX":
                xPressed = true;
                return;
            case "Space":
                spacePressed = true;
                return;

            default:
                return;
        }
    }

    if(e.keyCode == 32) {
        spacePressed = true;
    }
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    if(e.keyCode == 40) {
        downPressed = true;
    }
    else if(e.keyCode == 38) {
        upPressed = true;
    }
}
function keyUpHandler(e) {
    if ("code" in e) {
        switch(e.code) {
            case "Unidentified":
                break;
            case "ArrowRight":
            case "Right": // IE <= 9 and FF <= 36
            case "KeyD":
                rightPressed = false;
                return;
            case "ArrowLeft":
            case "Left": // IE <= 9 and FF <= 36
            case "KeyA":
                leftPressed = false;
                return;
            case "ArrowUp":
            case "Up": // IE <= 9 and FF <= 36
            case "KeyW":
                upPressed = false;
                return;
            case "ArrowDown":
            case "Down": // IE <= 9 and FF <= 36
            case "KeyS":
                downPressed = false;
                return;
            case "KeyX":
                xPressed = false;
                return;
            case "Space":
                spacePressed = false;
                return;
            default:
                return;
        }
    }

    if(e.keyCode == 32) {
        spacePressed = false;
    }
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    if(e.keyCode == 40) {
        downPressed = false;
    }
    else if(e.keyCode == 38) {
        upPressed = false;
    }
}
var playerX = 100
var playerY = 100
var leftPressed = false
var rightPressed = false
var upPressed = false
var downPressed = false
let count = 1
let playerDirection = 'up';

function startGame() {

    setInterval(requestAnimationFrame(draw), 100);

}
function drawPlayerTriangle(ctx) {
    let triangleHeight = 15

    ctx.beginPath();
    if (leftPressed) {
        ctx.moveTo(playerX - (triangleHeight * 2), playerY);
        ctx.lineTo(playerX, playerY - triangleHeight)
        ctx.lineTo(playerX, playerY + triangleHeight)
    } else
    if (rightPressed) {
        ctx.moveTo(playerX + (triangleHeight * 2), playerY);
        ctx.lineTo(playerX, playerY - triangleHeight)
        ctx.lineTo(playerX, playerY + triangleHeight)
    } else
    if (upPressed) {
        ctx.moveTo(playerX - triangleHeight, playerY);
        ctx.lineTo(playerX, playerY - (triangleHeight * 2))
        ctx.lineTo(playerX + triangleHeight, playerY)
    } else
    if (downPressed) {
        ctx.moveTo(playerX - triangleHeight, playerY);
        ctx.lineTo(playerX, playerY + (triangleHeight * 2))
        ctx.lineTo(playerX + triangleHeight, playerY)
    }
    ctx.fill();

}
function draw() {
    //start
    var ctx = canvas.getContext("2d");
    checkInput()
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw shit
    drawPlayerTriangle(ctx)



    ctx.font = "20px Georgia";
    ctx.beginPath();
    ctx.arc(playerX, playerY, 5, 0, 2 * Math.PI);

    ctx.fill();


    //end
    requestAnimationFrame(draw)
}
function checkInput() {
    if (leftPressed) {
        playerX--
        playerDirection = "left"
    }
    if (rightPressed) {
        playerX++
        playerDirection = "right"
    }
    if (upPressed) {
        playerY--
        playerDirection = "up"
    }
    if (downPressed) {
        playerY++
        playerDirection = "down"
    }
}


startGame()