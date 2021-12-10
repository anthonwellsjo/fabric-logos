

export const randomNumber = (decimals: number) => {
  if (decimals === 0) {
    return randomPlusOrMinus(Math.random() * 10);
  }
  return randomPlusOrMinus(Math.random() / (decimals - 1 * 10));
}

export const randomPlusOrMinus: (number: number) => number = (number: number) => {
  switch (Math.floor(Math.random() * 2)) {
    case 0: return -number;
    case 1: return number;
    default: return randomPlusOrMinus(number);
  }
}