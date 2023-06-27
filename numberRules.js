export class NumberRules {
  #val;
  isValid = null;
  log = {};

  constructor(val) {
    if (isNaN(val)) throw new Error('YOUR VALUE IS NaN');
    this.#val = val;
  }

  options = function (arg) {
    const entries = Object.entries(arg);
    entries.forEach(([key, value]) => {
      try {
        this[key](value);
      } catch (error) {
        throw new Error(
          `Option ${key} does not belong to this type NUMBER. ${Object.keys(this)
            .filter(el => {
              if (el === 'isValid' || el === 'log' || el === 'result') return false;
              return el;
            })
            .join(', ')}`
        );
      }
    });
    return this;
  };

  min = function (arg) {
    if (this.#val < arg) {
      this.isValid = false;
      this.log = {
        ...this.log,
        min: `the number ${this.#val} less then ${arg}`,
      };
      return this.result();
    } else {
      this, (this.isValid = true);
      this.log = {
        ...this.log,
        min: 'succsess',
      };
      return this.result();
    }
  };

  max = function (arg) {
    if (this.#val > arg) {
      this.isValid = false;
      this.log = {
        ...this.log,
        max: `the number ${this.#val} more then ${arg}`,
      };
      return this.result();
    } else {
      this.isValid = true;
      this.log = {
        ...this.log,
        max: 'succsess',
      };
      return this.result();
    }
  };

  isEqual = function (arg) {
    if (this.#val !== arg) {
      this.isValid = false;
      this.log = {
        ...this.log,
        isEqual: `the number ${this.#val} is not equal ${arg}`,
      };
      return this.result();
    } else {
      this.isValid = true;
      this.log = {
        ...this.log,
        isEqual: `succsess`,
      };
      return this.result();
    }
  };

  result() {
    if (Object.values(this.log).some(log => log !== 'succsess')) {
      this.isValid = false;
      return this;
    } else {
      this.isValid = true;
      return this;
    }
  }
}
