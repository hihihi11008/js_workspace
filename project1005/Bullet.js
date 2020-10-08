/* 총알을 정의한다 */
class Bullet{

    //총알이 태어날떄 부여할 속성들을 생성자에서 처리한다
    constructor(src,x,y,width,height,velX,velY){
        this.img;
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
    
        this.img=document.createElement("img");
        this.img.src=this.src;//폭탄, 총알 등등의 웨폰이 여러가지가 있으므로 
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";//우주선
        this.img.style.top=this.y+"px";
        this.img.style.width=width+"px";
        this.img.style.height=height+"px";

        wrapper.appendChild(this.img);//화면에 부착 
    }
    //총알의 물리량 변화 
    tick(){
        this.y+=this.velY;

        //총알이 한걸음, 한걸음 진행할때마다 배열에 존재하는 모든 전국을 대상으로 
        //충돌했는지 여부를 판단할꺼야
        for(var i=0;i<enemyArray.length;i++){
            var result=collisionCheck(this.img, enemyArray[i].img);
            if(result){
                // alert("맞췃댱");
                //너죽고(적군배열에서 요소 삭제 splice(index 삭제), 화면에서도 삭제 removeChild)
                var img=enemyArray[i].img;
                wrapper.removeChild(img);
                enemyArray.splice(0,1);
                
                //나죽자(총알배열에서 요소 삭제 splice(index 삭제), 화면애서도 삭제 removeChild)
                wrapper.removeChild(this.img); //화면에서 제거 
                var index=bulletArray.indexOf(this); //현재 총알의 인스턴스가 배열의 몇번째 존재하는지 알아냄
                bulletArray.splice(index,1);
            }
        }
    }
    //변화된 물리량을 화면에 표시 (그래픽처리)
    render(){
        this.img.style.top=this.y+"px";
    }
}