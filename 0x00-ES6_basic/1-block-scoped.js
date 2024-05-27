export default function taskBlock(trueOrFalse) {
  const _task = false;
  const _task2 = true;

  if (trueOrFalse) {
    (function taskFunction() {
      const task = true;
      const task2 = false;
    }());
  }
  return [_task, _task2];
}
