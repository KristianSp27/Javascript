function minNumber(input) {
  let inputElement = input[0];
  let index = 1;

  let minNumber = Number.MAX_SAFE_INTEGER;

  while (inputElement !== "Stop") {
    let num = Number(inputElement);

    if (num < minNumber) {
      minNumber = num;
    }
    inputElement = input[index];
    index++;
  }
  console.log(minNumber);
}
