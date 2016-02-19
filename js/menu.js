
// Opens the frogger menu
var Menu = function () {
    this.selectedOption = 1;
    this.enterPressed = false;
}
//

Menu.prototype.drawMenu = function() {

    ctx.clearRect(0, 0, 506, 301);
    // Main Menu
    ctx.strokeStyle = "blue";
    ctx.strokeRect(0, 0, 505, 300);

    ctx.font = "40px Comic Sans";
    ctx.textAlign="center";
    ctx.fillText("Frogger",252,50);

    ctx.font = "20px Comic Sans";
    ctx.textAlign="center";
    ctx.fillText("Start",252,150);

    ctx.font = "20px Comic Sans";
    ctx.textAlign="center";
    ctx.fillText("Controls",252,200);

    ctx.font = "20px Comic Sans";
    ctx.textAlign="center";
    ctx.fillText("Info",252,250);

    ctx.strokeStyle = "red";

    if (this.selectedOption == 1) {
        ctx.strokeRect(201,118,100,50);
    }
    else if (this.selectedOption == 2) {
        ctx.strokeRect(201,168,100,50);
    }
    else if (this.selectedOption == 3) {
        ctx.strokeRect(201,218,100,50);
    }

    ctx.font = "14px Comic Sans";
    ctx.fillText("By: Stephen Shilale",440,295);
}

Menu.prototype.drawControls = function() {
    // here i will draw the controls menu
    ctx.clearRect(0, 0, 506, 301);
    ctx.font = "20px Comic Sans";
    ctx.textAlign="center";
    ctx.fillText("Controls",252,250);
}

Menu.prototype.drawInfo = function() {
    // here I will draw the development information
    ctx.clearRect(0, 0, 506, 301);
    ctx.font = "20px Comic Sans";
    ctx.textAlign="center";
    ctx.fillText("Info",252,250);
}

// /*
Menu.prototype.handleInput = function(key) {
    var emptry = 0;

    if (key === 'up') {
        if (!(this.selectedOption == 1)) {
            this.selectedOption -= 1;
        }
        else {
            this.selectedOption = this.selectedOption;
        }
    } else if (key === 'down') {
        if (!(this.selectedOption == 3)) {
            this.selectedOption += 1;
        }
        else {
            this.selectedOption = this.selectedOption;
        }
    } else if (key == 'enter') {
        this.enterPressed = true;
    } /*else if (key == 'backspace') {
        if (this.selectedOption == 1) { // if start is selected, do nothing
            this.selectedOption = this.selectedOption;
        } else if ((this.selectedOption == 2) || (this.selectedOption == 3)) { // if in controls or info menu, reset menu
            this.drawMenu();
        }
    }
*/}
// */
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        13: 'enter',
        //8: 'backspace',
        38: 'up',
        40: 'down'
    };

    menu.handleInput(allowedKeys[e.keyCode]);
});

var menu = new Menu();