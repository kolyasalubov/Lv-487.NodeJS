export default class Task {
  constructor(description, func) {
          this.description = description;
          this.func = func;
  }

  run() {
          let params = [];

          if (this.func.length) {
                  const input = prompt(this.description);
                  if (input === null) return;
                  params = this.checkInput(input);
          } else {
                  alert(this.description);
          }
          const result = this.func(...params);
          console.log(result);
  }

  checkInput(input) {
          if (input !== '') {
                  const userInput = input.split(',');
                  const intParams = userInput.map(value => +value);
                  this.checkValue(intParams);
                  return intParams;
          }
          alert('Input is empty');
          this.run();
  }

  checkValue(value) {
          // eslint-disable-next-line no-restricted-globals
          if (this.func.length !== value.length || value.some(el => isNaN(el))) {
                  alert('Invalid Parameters !');
                  this.run();
          }
  }
}

export const tasks = new Map();
