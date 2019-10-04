/* eslint-disable no-undef */
jest.mock('fs');

function sum(a, b) {
  return a + b;
}

test('sample test', () => {
  expect(sum(1, 0)).toEqual(1);
});
