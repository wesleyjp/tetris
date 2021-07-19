let canvas;
let ctx;
let gBArrayHeight = 20; //get board array height
let gBArrayWidth = 12;
let startX = 4;
let StartT = 0;
let coordinateArray = [...Array(gBArrayHeight)].map(e => Array(gBArrayWidth).fill(0))
let curTetromino = [[1,0], [0,1], [1,1], [2,1]];

class Coordinates {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

document.addEventListener('DOMContentLoaded', SetupCanvas);

function CreateCoodArray(){
    let i = 0, j = 0;
    for (let y = 9; y <= 446; y++) {
        for (let x = 11; x <= 264; x++){
            coordinateArray[i][j] = new Coordinates(x,y);
            i++;
        }
        j++;
        i = 0;
    }
}

function SetupCanvas(){
    canvas = document.getElementById('mainCanvas');
    ctx = canvas.getContext('2d');
    canvas.width = 936;
    canvas.height = 956;

    ctx.scale(2,2);
    
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.stokeStyle = 'black';
    ctx.strokeRect(8, 8, 280, 462);

    CreatCoordArray();
    DrawTetromino()

}

function DrawTetromino() {
    for(let i= 0; i< curTetromino.length; i++) {
        let x = curTetromino[i][0] + startX;
        let x = curTetromino[i][0] + startY;
    }
}