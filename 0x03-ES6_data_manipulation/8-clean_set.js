export default function cleanSet(set, str) {
  if (str === '' || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const string = [];
  set.forEach((element) => {
    if (element && element.startsWith(str)) {
      const index = str.length;
      string.push(element.slice(index));
    }
  });
  return string.join('-');
}
