import app from '../src/helpers';

describe('createArrayOfNumbers()', () => {
  it('should return an array of numbers based on the 2 numbers passed to it.', () => {
    const testCreateArrayOfNumbers = app.createArrayOfNumbers(1,5);
    expect(testCreateArrayOfNumbers).toEqual([1,2,3,4,5]);
  });
});

describe('isMultiple()', () => {
  it('should return a filtered array of numbers that are a multiple of the first number', () => {
    const testIsMultiple = app.isMultiple(3,13);
    expect(testIsMultiple).toEqual([3,6,9,12]);
  });
})

describe('isWholeNumber()', () => {
  it('should return `true` if number is a whole number', () => {
    const testIsWholeNumber = app.isWholeNumber(10);
    expect(testIsWholeNumber).toEqual(true);
  });

  it('should return `false` if number is not a whole number', () => {
    const testIsWholeNumber = app.isWholeNumber(3.5);
    expect(testIsWholeNumber).toEqual(false);
  });
});

