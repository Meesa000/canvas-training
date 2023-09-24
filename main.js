const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



let x = 0;
let y = 0;

function greenRectPos (){

for (let x = 0; x<=500; x++) {
    ctx.fillStyle = "green";
    
    
    ctx.fillRect(x, 10, 10, 10);
    y++;

    }
}
setInterval(greenRectPos, 1000);








