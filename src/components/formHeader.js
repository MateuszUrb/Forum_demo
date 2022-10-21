import createElement from "./UI/createElement";
import style from "./form.module.css";

const headerContent = createElement(
  "h1",
  { class: style.form__header_title },
  "ZAPYTANIE O WYNAJEM"
);

const formHeader = createElement(
  "header",
  {
    class: style.form__header,
  },
  headerContent
);

export default formHeader;
