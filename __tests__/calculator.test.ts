import Calculator from '../calculator';

test('should return 0 for an empty string', () => {
  expect(Calculator("")).toBe(0);
});