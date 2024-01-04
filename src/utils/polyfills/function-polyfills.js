/* eslint-disable no-extend-native */
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error("It is not a function");
  context.fn = this;
  context.fn(args);
};

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function")
    throw new Error(this + "It is not a function");
  if (!Array.isArray(args))
    throw new Error(this + "Arguments must be type of array");

  context.fn = this;
  context.fn(args);
};

Function.prototype.myBind = function (...outerArgs) {
  const context = this;
  return function (...innerArgs) {
    context.apply(outerArgs[0], [...outerArgs.slice(1), ...innerArgs]);
  };
};
