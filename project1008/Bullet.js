class Bullet extends GameObject{
    constructor(container,src,width,height,x,y,velX,velY){
        super(container,src,width,height,x,y,velX,velY);
    }
    tick(){
        this.x=this.x+this.velX; //기존 x 위치 값에 소독만큼을 더해나간다 
    }
    render(){
        this.img.style.left=this.x+"px";
    }
}