document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const question = document.getElementById("question");
  const gif = document.getElementById("gif");
  let yesClickCount = 0;

  yesBtn.addEventListener("click", () => {
    yesClickCount++; // Tăng biến đếm mỗi lần nhấn
    if (yesClickCount === 1) {
      question.innerHTML = "Anh hứa sẽ yêu em bằng tất cả tấm lòng của mình!  😘 ";
      gif.src =
        "https://i.pinimg.com/originals/55/3d/42/553d42bea9b10e0662a05aa8726fc7f4.gif";
    } else if (yesClickCount === 2) {
      window.open(
        "https://www.facebook.com/profile.php?id=100070251169334",
        "_blank"
      );
    }
  });

  noBtn.addEventListener("mouseover", () => {
    moveButton(noBtn);
  });

  function moveButton(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    button.style.position = "fixed";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
  }
});
