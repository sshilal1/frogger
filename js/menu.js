var keyControls = {
    "keys": [
        {
            "img": "images/upArrow.png",
            "control": "Up",
            "width": 40
        },
        {
            "img": "images/downArrow.png",
            "control": "Down",
            "width": 40
        },
        {
            "img": "images/leftArrow.png",
            "control": "Left",
            "width": 40
        },
        {
            "img": "images/rightArrow.png",
            "control": "Right",
            "width": 40
        },
        {
            "img": "images/enterKey.png",
            "control": "Select",
            "width": 80
        },
        {
            "img": "images/backKey.png",
            "control": "Main Menu",
            "width": 80
        }
    ]
};


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

    var yPos = 40;
    var xPos = 150;
    for (key in keyControls.keys) {
        yPos += 50;
        if (yPos >= 260) {
            xPos = 350;
            yPos = 90;
        }
        var image = new Image();
        image.src = keyControls.keys[key].img;
        ctx.drawImage(image,xPos,yPos,keyControls.keys[key].width,40)
        ctx.font = "14px Comic Sans";
        ctx.textAlign="right";
        ctx.fillText(keyControls.keys[key].control,xPos-25,yPos+20);
    }
};

Menu.prototype.drawInfo = function() {
    // here I will draw the development information
    ctx.clearRect(0, 0, 506, 301);
    ctx.strokeStyle = "red";
    ctx.strokeRect(0, 0, 505, 300);

    ctx.font = "20px Comic Sans";
    ctx.strokeStyle = "black";
    ctx.textAlign="center";
    ctx.fillText("Developed By: Stephen Shilale",252,80);
    ctx.fillText("2016",252,120);
    ctx.font = "16px Comic Sans";
    ctx.fillText("Made For",252,160);
    ctx.font = "20px Comic Sans";
    ctx.fillText("Udacity: FrontEnd Web Development Course",252,200);
};

// /*
Menu.prototype.handleInput = function(key) {
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