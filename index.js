const btns = document.getElementsByClassName("question_section");
const icons = document.getElementsByClassName("icon");

for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];
  const icon = icons[i];

  btn.addEventListener("click", function () {
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.src = "assets/images/icon-plus.svg";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.src = "assets/images/icon-minus.svg";
    }
  });
}
