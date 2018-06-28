import { add, forEach, calculator } from './simpleFunction';

// // simple unit test
describe('add', () => {
  it('should add two numbers together', () => {
    const result = add(1, 3);
    expect(result).toEqual(4);
  });

  it('should add two negative numbers together', () => {
    expect(add(-2, -4)).toEqual(-6);
  });
});


// spy functions and beforeEach
describe('forEach', function () {
  let result;
  // create spy with an implementation
  const callbackSpy = jest.fn(a => a);

  // // run the forEach code before each test assertion block.
  beforeEach(() => {
    result = forEach(callbackSpy, [1, 2, 3]);
  });

  // // // reset the spy after each test
  afterEach(() => {
    callbackSpy.mockReset();
  })

  it('should call the callback function', () => {
    // assert whether callback has been called
    expect(callbackSpy).toHaveBeenCalled();
  });

  it('should call the callback function array.length amount of times', () => {
    expect(callbackSpy).toHaveBeenCalledTimes(3);
  });

  it('should return undefined', () => {
    expect(result).toBeUndefined();
  });
});






































/**
|--------------------------------------------------
| uncomment for 100% coverage
|--------------------------------------------------
*/

// // testing objects / classes
// describe('calculator', () => {
//   it('should have an add method', () => {
//     expect(calculator.add).toBeDefined();
//   });
//   describe('add', () => {
//     it('should add two numbers together', () => {
//       expect(calculator.add(1, 3)).toEqual(4);
//     });
//   })
// });


