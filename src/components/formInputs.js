import createElement from "./UI/createElement";
import style from "./form.module.css";
// inputs
import machineInputWrapper from "./formControls/machineInput";
import dateInputWrapper from "./formControls/dateInput";
import locationInputWrapper from "./formControls/locationInput";
import emailInputWrapper from "./formControls/emailInput";
import telephoneNrWrapper from "./formControls/phoneNrInput";

const formContent = createElement(
  "form",
  {
    class: style.form,
    id: "rentForm",
  },
  machineInputWrapper,
  dateInputWrapper,
  locationInputWrapper,
  emailInputWrapper,
  telephoneNrWrapper
);

export default formContent;
