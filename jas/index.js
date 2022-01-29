var r = Math.random();
r = r * 6;
r = Math.floor(r);


if(r==1)
{

  document.querySelector(".img1").setAttribute("src" , "images/dice1.png");

}
if(r==2)
{
  document.querySelector(".img1").setAttribute("src" , "images/dice2.png");

}
if(r==3)
{
  document.querySelector(".img1").setAttribute("src" , "images/dice3.png");

}
if(r==4)
{
  document.querySelector(".img1").setAttribute("src" , "images/dice4.png");

}
if(r==5)
{
  document.querySelector(".img1").setAttribute("src" , "images/dice5.png");

}
if(r!==1 && r!==2 && r!==3 && r!==4 && r!==5)
{
  r=6;
}

var r1 = Math.random();
r1 = r1 * 6;
r1 = Math.floor(r1);

if(r1==1)
{

  document.querySelector(".img2").setAttribute("src" , "images/dice1.png");

}
if(r1==2)
{
  document.querySelector(".img2").setAttribute("src" , "images/dice2.png");

}
if(r1==3)
{
  document.querySelector(".img2").setAttribute("src" , "images/dice3.png");

}
if(r1==4)
{
  document.querySelector(".img2").setAttribute("src" , "images/dice4.png");

}
if(r1==5)
{
  document.querySelector(".img2").setAttribute("src" , "images/dice5.png");

}

if(r1!==1 && r1!==2 && r1!==3 && r1!==4 && r1!==5)
{
  r1 = 6;
}

if(r==r1)
{
    document.querySelector("h1").textContent="DRAW";
}
if(r > r1)
{
    document.querySelector("h1").textContent="PLAYER 1 WINS";
}
if(r < r1)
{
    document.querySelector("h1").textContent="PLAYER 2 WINS";
}
