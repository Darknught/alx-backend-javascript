// taskBlock.js
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    (function taskFunction() {
      var task = true;
      var task2 = false;
      // Variables task and task2 inside this function are scoped to this block
    })();
  }

  return [task, task2];
}
