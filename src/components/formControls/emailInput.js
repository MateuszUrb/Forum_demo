import createElement from "../UI/createElement";
import style from "../form.module.css";

export const emailErrorMsg = createElement(
  "span",
  {
    class: style.form__input_error,
  },
  "WYMAGANE"
);

const emailLabel = createElement(
  "label",
  {
    class: style.form__label,
    for: "email",
  },
  "E - MAIL"
);

export const emailInput = createElement("input", {
  class: style.form__input,
  type: "email",
  required: true,
  id: "email",
});

const emailInputWrapper = createElement(
  "div",
  { class: style.form__controls },
  emailLabel,
  emailInput,
  emailErrorMsg
);

export default emailInputWrapper;
