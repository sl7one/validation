export class StringRules {
  #val;
  isValid = null;
  log = {};

  constructor(val) {
    this.#val = val;
  }

  options = function (arg) {
    const entries = Object.entries(arg);
    entries.forEach(([key, value]) => {
      try {
        this[key](value);
      } catch (error) {
        throw new Error(
          `Option ${key} does not belong to this type STRING. ${Object.keys(this)
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
    if (this.#val.length < arg) {
      this.isValid = false;
      this.log = {
        ...this.log,
        min: `the string length ${this.#val.length} less then ${arg} symbols`,
      };
      return this.result();
    } else {
      this.isValid = true;
      this.log = {
        ...this.log,
        min: 'succsess',
      };
      return this.result();
    }
  };

  max = function (arg) {
    if (this.#val.length > arg) {
      this.isValid = false;
      this.log = {
        ...this.log,
        max: `the string length ${this.#val.length} more then ${arg} symbols`,
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

  pattern = function (arg) {
    if (!arg.test(this.#val)) {
      this.isValid = false;
      this.log = {
        ...this.log,
        pattern: `invalid pattern validation`,
      };
      return this.result();
    } else {
      this.isValid = true;
      this.log = {
        ...this.log,
        pattern: 'succsess',
      };
      return this.result();
    }
  };

  isEmpty = function () {
    if (this.#val.length) {
      this.isValid = false;
      this.log = {
        ...this.log,
        isEmpty: `the string is not empty`,
      };
      return this.result();
    } else {
      this.isValid = true;
      this.log = {
        ...this.log,
        isEmpty: 'succsess',
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
