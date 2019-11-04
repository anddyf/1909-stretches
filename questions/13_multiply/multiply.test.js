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

    expect(multiply(4, 5)).toBe(20);
    
    // test that the returned value is correct
    expect(multiply(6, 5)).toBe(30)

    // test some other values
    expect(multiply(3, 5)).toBe(15);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
    expect(multiply(Math.floor(Math.random()), Math.floor(Math.random()))).toBe(15);
  });
});
