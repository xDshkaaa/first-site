const form = document.querySelector(".js-form");
const inputPasswordEl = document.querySelector("#password");

inputPasswordEl.addEventListener("blur", onFormBlur);
form.addEventListener("submit", onFormSubmit);

function onFormBlur(event) {
  if (
    event.currentTarget.value.length < Number(inputPasswordEl.dataset.length)
  ) {
    inputPasswordEl.value = "";
    return alert("password less than 8 symbols");
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  // const formData = new FormData(event.currentTarget);

  // formData.forEach((value, name) => {
  //   console.log("value : ", value);
  //   console.log("name : ", name);
  // });

  const {
    elements: { email, password },
  } = event.currentTarget;

  console.log("email: ", email.value);
  console.log("password: ", password.value);

  email.value = "";
  password.value = "";
}
