export default function updateStudentGradeByCity(students, city, newGrades) {
  const newList = students.filter((value) => value.location === city);
  const list = newList.map((value) => {
    const student = newGrades.find((student) => value.id === student.studentId);

    return {
      ...value,
      grade: student ? student.grade : 'N/A',
    };
  });
  return list;
}
