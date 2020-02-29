
// c.fillStyle = "red";
// c.fillRect(100,100,100,100);
// c.fillStyle = "blue";
// c.fillRect(100,300,100,100);
// c.fillRect(300,200,100,100);

// console.log(canvas);

// //line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300, 100); 
// c.lineTo(100,100);
// c.strokeStyle= "blue"
// c.stroke();

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI *2, false);
// c.strokeStyle="blue";
// c.stroke();


// c.beginPath();

/*
class Circle{
    constructor(x,y){
        this.x = x; 
        this.y = y; 
    }

    animate(){
        requestAnimationFrame(animate);
        c.beginPath();
        c.arc(this.x, this.y, 30, 0, Math.PI *2, false);
        c.strokeStyle="blue";
        c.stroke();
        this.x+=1;    
    }
}
*/

/*
x=10;
function animate(){
    requestAnimationFrame(animate);
    c.beginPath();
    c.arc(x, 100, 30, 0, Math.PI *2, false);
    c.strokeStyle="blue";
    c.stroke();
    x+=1
}

animate();

*/

// var x=1; 
// function animate(){

//     requestAnimationFrame(animate);
//     c.clearRect(0,0,innerWidth, innerHeight
//         );

//     c.beginPath();
//     c.arc(x, 300, 30, 0, Math.PI *2, false);
//     c.strokeStyle="blue";
//     c.stroke();
//     x+=9;
// }

// animate();


/*

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

class Circle {
    constructor() {
        this.radius = 80;
        this.x = Math.random() * (window.innerWidth - this.radius * 2) + this.radius;
        this.y = Math.random() * (window.innerHeight - this.radius * 2) + this.radius;
        this.dx = (Math.random() - 0.5);
        this.dy = (Math.random() - 0.5);

    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
        c.stroke();
    }
    update() {
        if (this.x + 80 > window.innerWidth || this.x - 80 < 0) {
            this.dx = -this.dx;
        }
        if (this.y + 80 > window.innerHeight || this.y - 80 < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

let circleArray = [];
for (let i = 0; i < 100; i++) {

    circleArray.push(new Circle());

}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();


*/


let canvas = document.querySelector('canvas'); 
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 
let c = canvas.getContext('2d'); 

class Circle{
    constructor(x,y,dx,dy, radius){
        this.x = x; 
        this.y = y; 
        this.dx = dx;
        this.dy = dy;
        this.radius = radius; 
    }

    draw(){
        c.beginPath(); 
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);  
        c.fillStyle = 'black';
        c.fill();
        c.lineWidth = 2;
        c.strokeStyle = 'red';
        c.stroke(); 
    }

    update(){
        if(this.x > window.innerWidth- this.radius  || this.x <0+ this.radius){
            this.dx = -this.dx;
        }
        if(this.y >window.innerHeight-this.radius || this.y<0+ this.radius){
            this.dy = -this.dy;
        }
        this.x +=this.dx; 
        this.y += this.dy; 
        this.draw();
    }
}


cirkle1 = new Circle(100,100, 5,5);

function createCircles(){  
    myCircles = [];
    for(let i =1; i<=100; i++){
        y = Math.random()*(window.innerHeight-60)+30;
        x = Math.random()*(window.innerWidth-60)+30;
        dx= (Math.random()-0.5)*10;
        dy= (Math.random()-0.5)*10;
        myCircles.push(new Circle(x,y, dx,dy, 30))
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
        for(let i = 0; i<myCircles.length ;i++){
        myCircles[i].update(); 
        }
}


createCircles();
animate();
console.log(cirkle1);
console.log(myCircles);



