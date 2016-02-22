/*
var keyControls = {
    "keys": [
        "up" : {
            "img" : "images/upArrow",
            "control" : "Up"
        },
        "down" : {
            "img" : "images/downArrow",
            "control" : "Down"
        },
        "left" : {
            "img" : "images/leftArrow",
            "control" : "Left"
        },
        "right" : {
            "img" : "images/rightArrow",
            "control" : "Right"
        },
        "menu" : {
            "img" : "images/enterKey",
            "control" : "Menu"
        }
    ]
}
*/

var Menu = function () {
    this.resetMenu();
    this.gameStart = false;
};

Menu.prototype.resetMenu = function() {
    this.selectedOption = 1;
    this.enterPressed = false;
    this.controlMenu = false;
    this.infoMenu = false;
}

Menu.prototype.drawMenu = function() {

    if (this.controlMenu) {
        this.drawControls();
    }
    else if (this.infoMenu) {
        this.drawInfo();
    }    
    else {
        this.drawMain();
    }
    ctx.font = "12px Comic Sans";
    ctx.fillText("selectedOption: " + this.selectedOption,440,20);
    ctx.fillText("gameStart: " + this.gameStart,440,40);
    ctx.fillText("controlMenu: " + this.controlMenu,440,60);
    ctx.fillText("infoMenu: " + this.infoMenu,440,80);
};

Menu.prototype.drawMain = function() {

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
};

Menu.prototype.drawControls = function() {
    
    ctx.clearRect(0, 0, 506, 301);
    // Here I will draw the controls menu
    ctx.strokeStyle = "green";
    ctx.strokeRect(0, 0, 505, 300);

    ctx.font = "32px Comic Sans";
    ctx.textAlign="center";
    ctx.fillText("Controls",252,50);

    ctx.font = "20px Comic Sans";
    ctx.textAlign="center";
};

Menu.prototype.drawInfo = function() {
    // here I will draw the development information
    ctx.clearRect(0, 0, 506, 301);
    ctx.font = "20px Comic Sans";
    ctx.textAlign="center";
    ctx.fillText("Info",252,250);
};

// /*
Menu.prototype.handleInput = function(key) {
    var emptry = 0;

    if (key === 'up') {
        if (!(this.selectedOption == 1)) { // if start isnt selected
            if (!((this.controlMenu) || (this.infoMenu))) {
                this.selectedOption -= 1;
            }
        }
        else {
            this.selectedOption = this.selectedOption;
        }
    }
    else if (key === 'down') {
        if (!(this.selectedOption == 3)) {
            if (!((this.controlMenu) || (this.infoMenu))) {
                this.selectedOption += 1;
            }      
        }
        else {
            this.selectedOption = this.selectedOption;
        }
    } 
    else if (key == 'enter') {
        if (this.selectedOption == 2) {
            this.infoMenu = false;
            this.controlMenu = true;
        }
        else if (this.selectedOption == 3) {
            this.controlMenu = false;
            this.infoMenu = true;
        }
        else {
            this.gameStart = true;
        }
    } 
    else if (key == 'backspace') {
        this.resetMenu();
    }
};

var menu = new Menu();