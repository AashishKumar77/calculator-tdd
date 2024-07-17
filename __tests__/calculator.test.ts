import Calculator from '../calculator';

test('should return 0 for an empty string', () => {
  expect(Calculator("")).toBe(0);
});

test("should throw an exception for negative numbers", () => {
  expect(() => Calculator("1,-2")).toThrow(
    "negative numbers not allowed: -2"
  );
  expect(() => Calculator("-1,2,-3")).toThrow(
    "negative numbers not allowed: -1,-3"
  );
});

