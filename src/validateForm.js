import {
  fromDateErrorMsg,
  toDateErrorMsg,
} from "./components/formControls/dateInput";
import {
  machineSelect as machineInput,
  machineErrorMsg,
} from "./components/formControls/machineInput";
import {
  fromDateInput,
  toDateInput,
} from "./components/formControls/dateInput";
import {
  locationInput,
  locationErrorMsg,
} from "./components/formControls/locationInput";
import {
  emailInput,
  emailErrorMsg,
} from "./components/formControls/emailInput";
import {
  phoneNrErrorMsg,
  telephoneNrInput,
} from "./components/formControls/phoneNrInput";

const validateMachineInput = () => {
  if (machineInput.value.length === 0) {
    machineErrorMsg.style = "visibility: visible";
    return false;
  } else {
    machineErrorMsg.style = "visibility: hidden";
    return true;
  }
};

const validateDateFrom = () => {
  if (fromDateInput.value.length === 0) {
    fromDateErrorMsg.style = "visibility: visible";
    return false;
  } else {
    fromDateErrorMsg.style = "visibility: hidden";
    return true;
  }
};
const validDateTo = () => {
  if (toDateInput.value.length === 0) {
    toDateErrorMsg.style = "visibility: visible";
    return false;
  } else {
    toDateErrorMsg.style = "visibility: hidden";
    return true;
  }
};

const validateLocationInput = () => {
  if (locationInput.value.length === 0) {
    locationErrorMsg.style = "visibility: visible";
    return false;
  } else {
    locationErrorMsg.style = "visibility: hidden";
    return true;
  }
};

const validateEmailInput = () => {
  if (
    emailInput.value.length === 0 ||
    emailInput.value.indexOf("@") === -1 ||
    emailInput.value.indexOf("@") === 0
  ) {
    emailErrorMsg.style = "visibility: visible";
    return false;
  } else {
    emailErrorMsg.style = "visibility: hidden";
    return true;
  }
};
//! remove letters from input
telephoneNrInput.addEventListener("keyup", (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/, "");
});

const validatePhoneNrInput = () => {
  if (
    telephoneNrInput.value.length === 0 ||
    telephoneNrInput.value.length > 12 ||
    telephoneNrInput.value.length < 6
  ) {
    phoneNrErrorMsg.style = "visibility: visible";
    return false;
  } else {
    phoneNrErrorMsg.style = "visibility: hidden";
    return true;
  }
};

export const clearInputs = () => {
  machineInput.value = "";
  fromDateInput.value = "";
  toDateInput.value = "";
  locationInput.value = "";
  emailInput.value = "";
  telephoneNrInput.value = "";
};

const validateInputs = () => {
  let valid = false;
  if (
    validateMachineInput() &&
    validateDateFrom() &&
    validDateTo() &&
    validateLocationInput() &&
    validateEmailInput() &&
    validatePhoneNrInput()
  ) {
    valid = true;
  } else {
    valid = false;
  }
  return valid;
};

export const formValidation = () => {
  validateMachineInput();
  validateDateFrom();
  validDateTo();
  validateLocationInput();
  validateEmailInput();
  validatePhoneNrInput();
};

export default validateInputs;
