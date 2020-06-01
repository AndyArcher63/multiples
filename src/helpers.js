const helpers = {
  createArrayOfNumbers(startArr, endArr) {
    const numberArray = [];

    let arrayNumber = startArr;

    for (arrayNumber; arrayNumber <= endArr; arrayNumber += 1) {
      numberArray.push(arrayNumber);
    }
    return numberArray;
  },
  isMultiple(numberToCheck, lastNumberOfArray) {
    const fullArrayOfNumbers = this.createArrayOfNumbers(numberToCheck, lastNumberOfArray);
    return fullArrayOfNumbers.filter(num => this.isWholeNumber(num / numberToCheck));
  },
  isWholeNumber(num) {
    return Number.isInteger(num);
  },
}

export default helpers;
