
function findRange(x, y) {
    const findDeviders = n => {
      if (typeof n !== "number" || n === "") {
        console.log("argument must be an integer");
      }
      let dividers = [];
      for (let i = 0; i < n; i++) {
        if (n % i === 0) {
          dividers.push(i);
        }
      }
      return dividers;
    };
  
    let obj = {};
    let sumObj = {};
    let resultObj = {};
  
    for (let i = x; i <= y; i++) {
      obj[i] = findDeviders(i);
    }
    for (let key in obj) {
      sumObj[key] = obj[key].reduce((sum, elem) => sum + elem);
    }
    let tempObj = { ...sumObj };
    for (let key in sumObj) {
      for (let item in tempObj)
        if (key == tempObj[item] && sumObj[key] == item) {
          resultObj[key] = +item;
        }
    }
  
    return resultObj;
  }
  module.exports = findRange;