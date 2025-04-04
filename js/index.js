document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".conteiner_inscription");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const birthdayInput = document.querySelector("#birthday");
  const gameSelect = document.querySelector("#game");
  const paymentInput = document.querySelector("#payment");

  const errorMessages = {
    name: "Por favor, ingresa tus nombres y apellidos.",
    email: "Por favor, ingresa un correo electrónico válido.",
    birthday: "Debes tener más de 14 años para inscribirte.",
    game: "Por favor, selecciona un torneo.",
  };

  const isAgeValid = (birthDate) => {
    console.log(birthDate);
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth() - birthDateObj.getMonth();
    return age > 14 || (age === 14 && m >= 0);
  };

  

});
