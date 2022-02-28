var downTimer = 0;
var mouseState = "up";
var mouseX=0, mouseY = 0;
var el = document.querySelector('.light');

document.body.addEventListener('mousedown',(e)=>{
	el.style.width = "0px";
	el.style.height = "0px";
	el.classList.remove('animate');
	mouseState="down";
	mouseX = e.pageX;
	mouseY = e.pageY;
	var i = setInterval(()=>{
	downTimer++;
	addLight();
	if(mouseState==="up")
		{
			el.classList.add('animate');
			downTimer=0;
			mouseX=0;
			mouseY=0;
			clearInterval(i);
		}
},10);
});

document.body.addEventListener('mouseup',(e)=>{
	mouseState="up";
});

function addLight() {
	el.style.left = mouseX + "px";
	el.style.top = mouseY + "px";
	el.style.width = downTimer + "px";
	el.style.height = downTimer + "px";
}

document.body.addEventListener('mousemove', (e)=>{
	mouseX = e.pageX;
	mouseY = e.pageY;
});
