function Calculator(input: string): number {
    if (input === "") {
      return  0;
  }
  let delimiter = ",";
  const numbers = input.split(delimiter);
  const negativeNumbers = numbers.filter((num) => parseInt(num) < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }

  return 0;
}


export default Calculator;