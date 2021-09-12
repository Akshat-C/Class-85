var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

rx = 10;
ry = 10;

rh = 70;
rw = 100;
var mars_img = ["Mars1.jpg","Mars2.jpg","Mars3.jpg","Mars4.jpg"];
var r = Math.floor(Math.random()*4);
r_img = "rover.png";
b_img = mars_img[r];

function add()
{
    bg = new Image();
    bg.onload = uploadbg;
    bg.src = b_img;

    rb = new Image();
    rb.onload = uploadrb;
    rb.src = r_img;
}

function uploadbg()
{
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function uploadrb()
{
    ctx.drawImage(rb, rx, ry, rw, rh);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed = e.keyCode;

    if (keypressed=="37")
    {
        Left();
    }
    else if (keypressed=="38")
    {
        Up();
    }
    else if (keypressed=="39")
    {
        Right();
    }
    else if (keypressed=="40")
    {
        Down();
    }
}

function Left()
{
    if (rx >= 0)
    {
        rx = rx-10;
        uploadbg();
        uploadrb();
    }
}

function Right()
{
    if (rx <= 700)
    {
        rx = rx+10;
        uploadbg();
        uploadrb();
    }
}

function Up()
{
    if (ry >= 0)
    {
        ry = ry-10;
        uploadbg();
        uploadrb();
    }
}

function Down()
{
    if (ry <= 530)
    {
        ry = ry+10;
        uploadbg();
        uploadrb();
    }
}