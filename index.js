function loggerthis() {
  console.log(" I loged");
}
function Addition(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
// exports.loggerthis = loggerthis();
module.exports = { Addition, subtract, loggerthis };
