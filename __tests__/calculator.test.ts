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


test("should return the sum of numbers with a custom delimiter", () => {
  expect(Calculator("//;\n1;2")).toBe(3);
  expect(Calculator("//|\n4|5|6")).toBe(15);
});
