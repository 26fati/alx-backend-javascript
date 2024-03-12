export default function cleanSet(set, str) {
  if (str === '') {
    return '';
  }
  const string = [];
  set.forEach((element) => {
    if (element.startsWith(str)) {
      const index = str.length;
      string.push(element.slice(index));
    }
  });
  return string.join('-');
}
