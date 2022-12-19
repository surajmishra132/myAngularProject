document.body.addEventListener("mousemove", mousemove)
// var span=document.querySelector(".cursorMove")
let span=document.createElement("div");
span.classList.add("cursorMove")
var sec=document.querySelector(".sec")
sec.append(span)
function mousemove(e){
  e.preventDefault()
let x=e.pageX;
let y=e.pageY
console.log(x,y);
span.style.left=x+"px"
span.style.top=y+"px"

}