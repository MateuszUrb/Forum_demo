import createElement from "../UI/createElement";
import style from "../form.module.css";

export const machineErrorMsg = createElement(
  "span",
  {
    class: style.form__input_error,
  },
  "WYMAGANE"
);

const machineLabel = createElement(
  "label",
  {
    class: style.form__label,
    for: "machine",
  },
  "RODZAJ MASZYNY"
);

const machine1 = createElement(
  "option",
  {
    value: "",
    selected: true,
  },
  ""
);
const machine2 = createElement(
  "option",
  {
    value: "machine2",
  },
  "machine2"
);
const machine3 = createElement(
  "option",
  {
    value: "machine3",
  },
  "machine3"
);

export const machineSelect = createElement(
  "select",
  {
    class: style["form__input_select"],
    required: true,
    id: "machine",
    name: "machine",
    value: "",
  },
  machine1,
  machine2,
  machine3
);

const machineInputWrapper = createElement(
  "div",
  { class: style.form__controls },
  machineLabel,
  machineSelect,
  machineErrorMsg
);

export default machineInputWrapper;
