

const frameBack = document.getElementById("frameBack");
const line1 = document.getElementById("line1")

let deg = 0;
function rotate(){
    
    frameBack.style.transform = `rotateY(${deg}deg)`;
    
    deg += 0.2

    if(deg == 360){
        deg = 0
    }



    requestAnimationFrame(rotate)

}
requestAnimationFrame(rotate)