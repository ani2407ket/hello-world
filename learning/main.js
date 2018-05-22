var Grid={
	rows:10,
	cols:10,
	width:40,
	height:40,
}
const canvas=document.getElementById("canvas");
canvas.width=Grid.cols*Grid.width;
canvas.height=Grid.rows*Grid.height;
const ctx=canvas.getContext("2d");
function draw(){
	
}