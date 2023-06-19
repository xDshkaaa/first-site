const form = document.querySelector(".js-form");
form.addEventListener("submit", onFormSubmit);

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
