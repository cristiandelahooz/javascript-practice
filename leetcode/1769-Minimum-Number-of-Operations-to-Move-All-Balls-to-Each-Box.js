const IS_EMPTY = '0';
const IS_NOT_EMPTY = '1';

/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = (boxes) => {
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] === IS_EMPTY) console.log(`position: ${i} is empty`);
    else console.log(`position: ${i} is not empty`);
  }

  return 0;
};

minOperations('110');

const number = [1, 3, 4];
number.add(1);

console.log(number);
