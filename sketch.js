var speed1;
var speed2;
var speed3;
var speed4;
var weight1;
var weight2;
var weight3;
var deformation1;
var deformation2;
var deformation3;


function setup() {
     createCanvas(1300, 600);


     wall1 = createSprite(1200, 100, 20, 80);
     wall2 = createSprite(1200, 300, 20, 80);
     wall3 = createSprite(1200, 500, 20, 80);
 

     car1 = createSprite(100, 100, 20, 20);
     car2 = createSprite(100, 300, 20, 20);
     car3 = createSprite(100, 500, 20, 20);


     line1 = createSprite(1500, 200, 3500, 10);
     line1.shapeColor = "white"

     line2 = createSprite(1500, 400, 3500, 10);
     line2.shapeColor = "white"

    


}

function draw() {
     background(0);
     speed1 = 19
     speed2 = 23
     speed3 =10
     weight1 =2260
     weight2 =1422
     weight3 =2000




     car1.velocityX = speed1;
     car2.velocityX = speed2;
     car3.velocityX = speed3;
    
     if (wall1.x - car1.x < wall1.width / 2 + car1.width / 2) {
          car1.velocityX = 0;
          deformation1 = Math.round(0.5 * weight1 * speed1 * speed1 / 22500);
          if (deformation1 <12) {
               car1.shapeColor = "green";
          }
          if (deformation1>13&&deformation1<18) {
               car1.shapeColor = "yellow";
          }
          if (deformation1 >17) {
               car1.shapeColor = "red";
          }
     }

     if (wall2.x - car2.x < wall2.width / 2 + car2.width / 2) {
          car2.velocityX = 0;
          deformation2 = Math.round(0.5 * weight2 * speed2 * speed2 / 22500);
          if (deformation2 <12 ) {
               car2.shapeColor = "green";
          }
          if (deformation2>13&&deformation2<18) {
               car2.shapeColor = "yellow";
          }
          if (deformation2 >17) {
               car2.shapeColor = "red";
          }
     }

     if (wall3.x - car3.x < wall3.width / 2 + car3.width / 2) {
          car3.velocityX = 0;
          deformation3 = Math.round(0.5 * weight3 * speed3 * speed3 / 22500);
          if (deformation3 <12) {
               car3.shapeColor = "green";
          }
          if (deformation3>13&&deformation3<18) {
               car3.shapeColor = "yellow";
          }
          if (deformation3 >17) {
               car3.shapeColor = "red";
          }
     }
     
    
     console.log(deformation1,deformation2,deformation3)





     drawSprites();
}