// 182
function findData(args) {
    let i;
    let summ = 0;
    let numbers = [];
    for (i = 1; i < args.length; i++) {
      if (args[i] % 5 === 0 && args[i] % 7 !== 0) {
        summ += args[i];
        numbers = [...args[i]];
      }
    }
  
    return {
      summ,
      quantity: numbers.length
    };
  }
  module.exports = findData;