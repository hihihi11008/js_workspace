class Person{
    constructor(eye,arm){
        this.eye=eye;
        this.arm=arm;
        console.log("I am super class(Person) ");
        console.log("my eye%d, arm %d ", this.eye, this.arm);
    }
    // 행동은 함수로 표현한다 (즉 메서드 )
    walk(){
        console.log("두발로 걸어요 ");
    }
    speak(){
        console.log("말을해요 ")
    }
}