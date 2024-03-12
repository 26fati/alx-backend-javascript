export default function getStudentsByLocation(arr, city) {
  return arr.filter((std) => std.location === city);
}
