var Engine = (function(global) {
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        patterns = {},
        lastTime;

    canvas.width = 505;
    canvas.height = 707;
    doc.body.appendChild(canvas);

    function game() {
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        var theScore = 0;
        update(dt);
        render(theScore);

        lastTime = now;

        win.requestAnimationFrame(game);
    };

    function startMenu() {

        if (menu.gameStart == true) {
            win.cancelAnimationFrame(startMenu);
            ctx.clearRect(0, 0, 506, 301);
            player.reset();
            game();
        }

        else {
            menu.drawMenu();
            win.requestAnimationFrame(startMenu);
        }
        
    };

    function init() {
        reset();
        lastTime = Date.now();
        startMenu();
    };

    function update(dt) {
        updateEntities(dt);
    };

    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
    };

    function render(theScore) {
        var rowImages = [
                'images/water-block.png',
                'images/stone-block.png',
                'images/stone-block.png',
                'images/stone-block.png',
                'images/grass-block.png',
                'images/grass-block.png'
            ],
            numRows = 6,
            numCols = 5,
            row, col;

        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }

        // Draw the scoreboard 
        ctx.clearRect(300, 0, 200, 50);
        ctx.font = "20px Georgia";
        ctx.fillText("Score: " + player.playerScore, 420, 20);

        renderEntities();
    };

    function renderEntities() {
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });
        player.render();
    };

    function reset() {
        // noop
    };

    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-boy.png'
    ]);
    Resources.onReady(init);

    global.ctx = ctx;

    document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        13: 'enter',
        8: 'backspace',
        38: 'up',
        40: 'down'
    };
    menu.handleInput(allowedKeys[e.keyCode]);
    });

})(this);
