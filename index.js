const btns = document.getElementsByClassName("question_section");
const icons = document.getElementsByClassName("icon");

const icon = icons[i];

for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];

  btn.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.src = "assets/images/icon-plus.svg";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.src = "assets/images/icon-minus.svg";
    }
  });
}
