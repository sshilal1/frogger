// Enemies our player must avoid
var Enemy = function() {
    this.xRange = [-150, 600];
    this.possibleY = [60, 140, 220];
    this.speedRange = [150, 600];

    this.sprite = 'images/enemy-bug.png';

    this.reset();
};

Enemy.prototype.update = function(dt) {
    var maxPos = this.xRange[1];
    this.x += this.speed * dt;

    if (this.x > maxPos) {
        this.reset();
    }
};

Enemy.prototype.reset = function() {
    var startPos = this.xRange[0];

    this.x = startPos;
    this.y = this.possibleY[Math.floor(Math.random() * this.possibleY.length)];
    this.speed = this.getRandomSpeed();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.getRandomSpeed = function() {
    var minSpeed = this.speedRange[0],
        maxSpeed = this.speedRange[1];
    return Math.floor(Math.random() * (maxSpeed - minSpeed)) + minSpeed;
};

// Player initialization
var Player = function() {
    this.xRange = [-2, 402];
    this.yRange = [-20, 380];
    this.sprite = 'images/char-boy.png';
    this.playerScore = 0;
    this.reset();
};

// Does the real work of the game
Player.prototype.update = function() {
    if (this.y == -20) {
        // player is on water, reset, score one
        this.scorePoint();
        this.reset();
    } else if (this.y >= 60 && this.y <= 220) {
        var self = this;
        // player is on road rows, check collisions
        // loop through each bug
        allEnemies.forEach(function(enemy) {
            // is the bug on the same row as the player?
            if (enemy.y == self.y) {
                // is the bug on the player?
                if (enemy.x >= player.x - 30 && enemy.x <= player.x + 30) {                   
                    self.reset();
                    self.losePoint();
                }
            }
        });
    }
};

// Resets the player to the starting point of the map
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 380;
};

// Scores a point
Player.prototype.scorePoint = function() {
    this.playerScore += 1;
};

// Subtracts a point
Player.prototype.losePoint = function() {
    this.playerScore -= 1;
};

// Render the location
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Key input handles
Player.prototype.handleInput = function(key) {
    if (key === 'left') {
        this.x -= (this.x - 101 < this.xRange[0]) ? 0 : 101;
    } else if (key === 'right') {
        this.x += (this.x + 101 > this.xRange[1]) ? 0 : 101;
    } else if (key === 'up') {
        this.y -= (this.y - 80 < this.yRange[0]) ? 0 : 80;
    } else if (key === 'down') {
        this.y += (this.y + 80 > this.yRange[1]) ? 0 : 80;
    }
};

var player = new Player();


var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3];

