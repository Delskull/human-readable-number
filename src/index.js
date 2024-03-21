module.exports = function toReadable(number) {
    const ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    const teens = ['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']

    if (number.toString().length === 1) {
      for (let i = 0; i < ones.length; i++) {
        if (number === i + 1) {
          // console.log(number.toString())
          return ones[i];
        }
      }
      return 'zero'
    }
    if (number.toString().length === 2 && number.toString() % 10 === 0) {
      for (let i = 0; i < tens.length; i++) {
        if (number === i * 10){
          return tens[i]
        }
      }
    }
    if (number > 10 && number < 20) {
      // console.log(Math.ceil(number / 10))
      return teens[number - 10]
    }
    if (number.toString().length === 2 && (!number.toString() % 10 === 0)){
      return tens[Math.floor(number / 10)] + ' ' + ones[number % 10 - 1]
    }
    // if (number.toString().length === 3 && number.toString() % 100 === 0){
    //   return ones[number / 100 - 1] + ' ' + 'hundred'
    // }
    if (number.toString().length === 3 && number.toString() % 10 === 0){
      return ones[Math.floor(number / 100 - 1)] + '  ' + 'hundred' + '  ' + tens[Math.floor(number % 100 / 10)]
    }
    if (number.toString().length === 3 && (!number.toString() % 10 === 0) && (number % 100) > 10 && (number % 100) < 20){
      // console.log(number % 100 )
      return ones[Math.floor(number / 100 - 1)] + '  ' + 'hundred' + '  ' + teens[Math.floor(number % 100) - 10]
    }
    if (number.toString().length === 3 && (!number.toString() % 10 === 0)){
      // console.log(number % 100)
      return ones[Math.floor(number / 100 - 1)] + ' ' + 'hundred' + ' ' + tens[Math.floor(number % 100 / 10)] + ' ' + ones[number % 10  - 1]
    }

  };
