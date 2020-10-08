/*영화 이미지 썸네일을 정의한다 */
class Thumbnail{
    constructor(container,width,height,bd,src,x){
        this.div=document.createElement("div");
        this.container=container;//어디에넣을지 컨테이너를 동적으로 받자
        this.width=width;
        this.height=height;
        this.bd=bd;//보더두께
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;//div의 x좌표 
        var me=this;//
        
        //스타일부여 
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.border=this.bd+"px solid white";
        this.div.style.boxSizing="border-box";
        this.img.src=this.src;//이미지대입
        this.img.style.width=(this.width-(bd*2))+"px";
        this.img.style.height=(this.height-(bd*2))+"px";
        this.img.style.boxSizing="border-box";

        //이미지에 이벤트 구현하기 
        this.img.addEventListener("click",function(){
            // alert("나눌럿?");
            // getDetail(this.src,);
            //이벤트 구현시 사용되는 익명함수내에서 this를 쓰게 되면, 
            //객체의 인스턴스를 가리키게 되는 것이 아니라, 익명함수의 {}영역을 가리키게 된다. 
            //현재 객체가 배열의 몇번째 인지 알아맞추기 
            var index=thumbArray.indexOf(me);
            console.log("index : ",index);
            // alert("저는 thumbArray의"+index+"번째에 있으니, marvel 배열의 "+index+"번째를 이용할거에여" );
            getDetail(index);
            
            //포인터의 targetX값을 나의 좌표와 일치 
            Pointer.targetX=me.x;
        });

        //조립
        this.div.appendChild(this.img)//div에 이미지넣기
        this.container.appendChild(this.div);
    }
}