import createElement from "../UI/createElement";
import style from "../form.module.css";

const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1; //months from 1-12
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();

let newdate = year + "-" + month + "-" + day;

export const fromDateErrorMsg = createElement(
  "span",
  {
    class: style.form__input_error,
  },
  "WYMAGANE"
);

export const toDateErrorMsg = createElement(
  "span",
  {
    class: style.form__input_error,
  },
  "WYMAGANE"
);

export const fromDateLabel = createElement(
  "label",
  {
    class: style.form__date_from,
    for: "fromDate",
  },
  "OD"
);
export const fromDateInput = createElement("input", {
  class: style.form__input,
  type: "date",
  required: true,
  id: "fromDate",
  min: newdate,
});

export const toDateLabel = createElement(
  "label",
  {
    class: style.form__date_to,
    for: "toDate",
  },
  "DO"
);

export const toDateInput = createElement("input", {
  class: style.form__input,
  type: "date",
  required: true,
  id: "toDate",
});

fromDateInput.addEventListener("change", (e) => {
  let value = e.target.value;
  if (e.target.value < toDateInput.value) {
    toDateInput.min = value;
    toDateInput.value = "";
  } else {
    toDateInput.min = value;
  }
});

export const fromDataWrapper = createElement(
  "div",
  {
    class: style.form__dateWrapper,
  },
  fromDateLabel,
  fromDateInput,
  fromDateErrorMsg
);

export const toDataWrapper = createElement(
  "div",
  {
    class: style.form__dateWrapper,
  },
  toDateLabel,
  toDateInput,
  toDateErrorMsg
);

const dateInputWrapper = createElement(
  "div",
  { class: style.form__controls_date },
  fromDataWrapper,
  toDataWrapper
);

export default dateInputWrapper;
