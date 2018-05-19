var side = 32;
var obstacles = [{ x: 10 * side, y: 10 * side }];
var gold = [{ x: 5 * side, y: 6 * side }];

var playerX = 0;
var playerY = 0;

var playerHasGold = false;

function setup() {
    createCanvas(side * 16, side * 16);
    goldImg = loadImage("./Resources/gold.png")
}

function draw() {
    background('#acacac'); // Clear the screen

    drawPlayer(); // Draw the player
    
    drawResources(goldImg); // Draw the resources

    if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68)) && playerX < (width-side)) {
        for (var coords of obstacles) {
            if (Collision_right(coords)) return;
        }
        for (var i in gold) {
            var coords = gold[i];
            if (Collision_right(coords)) {
                playerHasGold = true;
                gold.splice(i, 1);
            }
        }
        playerX += side / 8;
    }
    if ((keyIsDown(LEFT_ARROW) || keyIsDown(65)) && playerX > 0) {
        for (var coords of obstacles) {
            if (Collision_left(coords)) return;
        }
        for (var i in gold) {
            var coords = gold[i];
            if (Collision_left(coords)) {
                playerHasGold = true;
                gold.splice(i, 1);
            }
        }
        playerX -= side / 8;
    }
    if ((keyIsDown(UP_ARROW) || keyIsDown(87)) && playerY > 0) {
        for (var coords of obstacles) {
            if (Collision_up(coords)) return;
        }
        for (var i in gold) {
            var coords = gold[i];
            if (Collision_up(coords)) {
                playerHasGold = true;
                gold.splice(i, 1);
            }
        }
        playerY -= side / 8;
    }
    if ((keyIsDown(DOWN_ARROW) || keyIsDown(83)) && playerY < (height - side)) {
        for (var coords of obstacles) {
            if (Collision_down(coords)) return;
        }
        for (var i in gold) {
            var coords = gold[i];
            if (Collision_down(coords)) {
                playerHasGold = true;
                gold.splice(i, 1);
            }
        }
        playerY += side / 8;
    }
}
