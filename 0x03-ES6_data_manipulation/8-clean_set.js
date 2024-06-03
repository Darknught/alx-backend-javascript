export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || set.size === 0) {
    return '';
  }

  const filteredValues = [...set].filter((value) => {
    if (typeof value === 'string') {
      return value.startsWith(startString);
    }
    return false;
  });
  return filteredValues.join('-');
}
