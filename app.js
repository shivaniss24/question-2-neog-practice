var input=document.querySelector('#input');
var buttonIncrease=document.querySelector('#increase');
var buttonDecrease=document.querySelector('#decrease');
var output=document.querySelector('#output');
// var size=16;

function increaseSize()
{
   var textIncrease=document.getElementById('input').style.fontSize='2px';
    output.innerText=textIncrease;

}
function decreaseSize()
{
    var textDecrease=document.getElementById('input').style.fontSize='2px';
    output.innerText=textDecrease;
    // font--;

}
function showOp()
{
    output.innerText=input.value;
}
input.addEventListener('input',showOp);
buttonIncrease.addEventListener('click',increaseSize);
buttonDecrease.addEventListener('click',decreaseSize);




