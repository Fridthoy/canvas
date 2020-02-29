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



