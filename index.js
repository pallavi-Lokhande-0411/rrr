var score1=0,score2=0;

function logic(){
  var num1= Math.floor(Math.random() * 6)+1;
  var num2= Math.floor(Math.random() * 6)+1;

  changeImage('img1',num1);
  changeImage('img2',num2);

  score1=score1+num1;
  score2= score2+num2;


  document.getElementById('name1').innerHTML=' Pallavi score  '+score1;
  document.getElementById('name2').innerHTML=' Shubhangi score  '+score2;

  if(score1>50){
    document.getElementById('name1').innerHTML='Pallavi Win';
    document.getElementById('name2').innerHTML='';

  }
  if(score2>50){
    document.getElementById('name1').innerHTML='';
    document.getElementById('name2').innerHTML='Shubhangi Win';
  }
}

function changeImage(img, number) {
  var bMusic = new Audio('sound/positive-winter-10785.mp3')
	bMusic.play();

  if(number==1){
    document.getElementById(img).src='images/1.jpeg';
  }
  if(number==2){
    document.getElementById(img).src='images/2.jpeg';
  }
   else if(number==3){
    document.getElementById(img).src='images/3.jpeg';
  }
  else if(number==4){
    document.getElementById(img).src='images/4.jpeg';
  }
  else if(number==5){
    document.getElementById(img).src='images/5.jpeg';
  }
  else{
    document.getElementById(img).src='images/6.jpeg';
  }

}
