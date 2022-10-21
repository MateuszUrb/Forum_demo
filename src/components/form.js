import createElement from "./UI/createElement";
import style from "./form.module.css";
import formHeader from "./formHeader";
import formContent from "./formInputs";
import validateInputs, { clearInputs, formValidation } from "../validateForm";
import { machineSelect as machineInput } from "../components/formControls/machineInput";
import {
  fromDateInput,
  toDateInput,
} from "../components/formControls/dateInput";
import { locationInput } from "../components/formControls/locationInput";
import { emailInput } from "../components/formControls/emailInput";
import { telephoneNrInput } from "../components/formControls/phoneNrInput";

const formButton = createElement(
  "button",
  {
    class: style.form__cta,
    type: "submit",
    form: "rentForm",
  },
  "ZAPYTANIE O WYNAJEM"
);

const formWrapper = createElement(
  "div",
  {
    class: style.form__wrapper,
  },
  formHeader
);

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = {
    machine: machineInput.value.trim(),
    dateFrom: new Date(fromDateInput.value),
    toDate: new Date(toDateInput.value),
    location: locationInput.value.trim(),
    email: emailInput.value.trim(),
    telephoneNumber: telephoneNrInput.value.trim(),
  };

  formValidation();
  if (validateInputs()) {
    console.dir(formData);
    clearInputs();
  } else {
    return false;
  }
});

//! app
const form = createElement(
  "div",
  {
    class: style.wrapper,
  },
  formWrapper,
  formContent,
  formButton
);

export default form;
