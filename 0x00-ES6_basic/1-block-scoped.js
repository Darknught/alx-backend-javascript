// taskBlock.js
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    (function taskFunction() {
      task = true;
      task2 = false;
      // Variables task and task2 inside this function are scoped to this block
    })();
  }

  return [task, task2];
}
