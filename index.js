   
const btn= document.getElementsByClassName("question_section");
const icon=document.getElementsByClassName("icon");
for(let i=0; i<btn.length;i++){
  btn[i].addEventListener("click", function() {

  var answer = this.nextElementSibling;
  if (answer.style.maxHeight) {
    answer.style.maxHeight = null;
    icon[i].src="assets/images/icon-plus.svg";
    
} else {
  answer.style.maxHeight = answer.scrollHeight + "px";
  icon[i].src="assets/images/icon-minus.svg";
} 
   });
}


