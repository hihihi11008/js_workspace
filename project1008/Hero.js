/*extends GameObject 를 명시하는 순간부터 현재의 Hero의 인스턴스는 마치 내것처럼 
, GameObject의 모든 변수, 함수를 사용할 수 있다. 그래서 상속이라 한다 
 */
class Hero extends GameObject{
    constructor(container,src,width,height,x,y,velX,velY){
        super(container,src,width,height,x,y,velX,velY);

    }
    //아래의 메서드는 주인공만의 행동방법이므로.. 이 클래스 안에서 정의하면 됨 
    tick(){
        this.x=this.x+this.velX; //기존 x 위치 값에 소독만큼을 더해나간다 
        this.y=this.y+this.velY; //기존 y 위치 값에 소독만큼을 더해나간다 
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}