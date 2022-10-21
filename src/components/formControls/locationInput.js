import createElement from "../UI/createElement";
import style from "../form.module.css";

export const locationErrorMsg = createElement(
  "span",
  {
    class: style.form__input_error,
  },
  "WYMAGANE"
);

//! location
const locationLabel = createElement(
  "label",
  {
    class: style.form__label,
    for: "location",
  },
  "MIEJSCOWOŚĆ"
);

//! location input
export const locationInput = createElement("input", {
  class: style.form__input,
  type: "text",
  required: true,
  id: "location",
});

const locationInputWrapper = createElement(
  "div",
  { class: style.form__controls },
  locationLabel,
  locationInput,
  locationErrorMsg
);

export default locationInputWrapper;
