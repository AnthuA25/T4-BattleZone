document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
    const gameArea = document.getElementById("game-area");
    const trash = document.getElementById("trash");
    const timerDisplay = document.getElementById("timer");
    const message = document.getElementById("message");
  
    let collected = 0;
    let totalBalls = 20;
    let countdown;
  
    startBtn.addEventListener("click", function () {
      startBtn.classList.add("hidden");
      trash.classList.remove("hidden");
      timerDisplay.classList.remove("hidden");
      message.textContent = "";
      collected = 0;
  
      // Crear bolas
      for (let i = 0; i < totalBalls; i++) {
        const ball = document.createElement("div");
        ball.classList.add("ball");
  
        const maxLeft = gameArea.clientWidth - 30;
        const maxTop = gameArea.clientHeight - 30;
        const left = Math.floor(Math.random() * maxLeft);
        const top = Math.floor(Math.random() * maxTop);
        ball.style.left = left + "px";
        ball.style.top = top + "px";
  
        // Mover bola
        const interval = setInterval(() => {
          const newLeft = Math.floor(Math.random() * maxLeft);
          const newTop = Math.floor(Math.random() * maxTop);
          ball.style.left = newLeft + "px";
          ball.style.top = newTop + "px";
        }, 1000);
  
        // Al hacer clic en la bola
        ball.addEventListener("click", function () {
          clearInterval(interval);
          ball.remove();
          collected++;
          if (collected === totalBalls) {
            clearInterval(countdown);
            message.textContent = "¡Ganaste 20 puntos!";
            timerDisplay.classList.add("hidden");
            trash.classList.add("hidden");
          }
        });
  
        gameArea.appendChild(ball);
      }
  
      // Iniciar temporizador
      let remaining = 60;
      const updateDisplay = () => {
        const mins = Math.floor(remaining / 60);
        const secs = remaining % 60;
        timerDisplay.textContent = `${mins.toString().padStart(2, "0")}:${secs
          .toString()
          .padStart(2, "0")}`;
      };
      updateDisplay();
  
      countdown = setInterval(() => {
        remaining--;
        updateDisplay();
  
        if (remaining <= 0) {
          clearInterval(countdown);
          document.querySelectorAll(".ball").forEach((ball) => ball.remove());
          message.textContent = "Juego terminado";
          timerDisplay.classList.add("hidden");
          trash.classList.add("hidden");
        }
      }, 1000);
    });
  });