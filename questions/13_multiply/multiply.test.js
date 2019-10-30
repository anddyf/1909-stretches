const { multiply } = require('./multiply');

describe('multiply testing', () => {
  multiply(4, 5)
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail
    
    expect(() => multiply(num1 === undefined)).toThrow();

    expect(() => multiply(num2 === undefined)).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    multiply(4, 5)
    expect(multiply)
    expect(4*5).toBe(20);
    multiply(6, 5)
    // test that the returned value is correct
    expect(6*5).toBe(30)

    // test some other values
    expect(/* fill this in */).toBe(/* fill this in */);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
  });
});
