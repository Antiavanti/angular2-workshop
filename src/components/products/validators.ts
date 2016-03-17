import {Control} from 'angular2/common';

interface ValidationResult {
  [key: string]: boolean;
}

export class FormValidator {
  static mailFormat(control: Control): ValidationResult {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return {"incorrectMailFormat": true};
    }
    return null;
  }
  static positiveInteger(control: Control): ValidationResult {
    if (!parseInt(control.value) || parseInt(control.value) <= 0) {
      return {"incorrectPositiveInteger": true};
    }
    return null;
  }
}
