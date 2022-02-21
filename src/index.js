module.exports = function check(str, bracketsConfig) {
  const BRACKETS_PAIR = Object.fromEntries(bracketsConfig);

  const strToArr = str.split('');
  let stack = [];

  strToArr.map((item) => {
    if (BRACKETS_PAIR[stack[stack.length - 1]] === item) {
      stack.pop(item);
    } else {
      stack.push(item);
    }
  });

  return stack.length === 0;
};
