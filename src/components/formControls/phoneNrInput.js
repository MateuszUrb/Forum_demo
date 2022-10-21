import createElement from "../UI/createElement";
import style from "../form.module.css";

export const phoneNrErrorMsg = createElement(
  "span",
  {
    class: style.form__input_error,
  },
  "WYMAGANE"
);

const telephoneNrLabel = createElement(
  "label",
  {
    class: style.form__label,
    for: "telephone",
  },
  "NUMER TELEFONU*"
);

export const telephoneNrInput = createElement("input", {
  class: style.form__input,
  type: "tel",
  required: true,
  id: "telephone",
});



const telephoneNrWrapper = createElement(
  "div",
  { class: style.form__controls },
  telephoneNrLabel,
  telephoneNrInput,
  phoneNrErrorMsg
);

export default telephoneNrWrapper;
