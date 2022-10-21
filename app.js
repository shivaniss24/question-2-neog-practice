var input=document.querySelector('#input');
var increase=document.querySelector('#increase');
var decrease=document.querySelector('#decrease');
var output=document.querySelector('#output');

function fontIncrease()
{
    var fontSize=window.getComputedStyle(output).fontSize;
    var currentSize=parseFloat(fontSize)
    output.style.fontSize=`${currentSize+2}px`;
}

function fontDecrease()
{
    var fontSize=window.getComputedStyle(output).fontSize;
    var currentSize=parseFloat(fontSize)
    output.style.fontSize=`${currentSize-2}px`;
}

function showOp()
{
output.innerText=input.value
}
input.addEventListener('keyup',showOp);
increase.addEventListener('click',fontIncrease);
decrease.addEventListener('click',fontDecrease);