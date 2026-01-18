const studentData = [
  { name: "Alice", marks: 100 },
  { name: "Bob", marks: 76 },
  { name: "Charlie", marks: 90 },
  { name: "Kagabo", marks: 76 }
];

function fetchMarks() {
  return new Promise((resolve) => {
    console.log("Fetching marks from the server...");
    setTimeout(() => {
      resolve(studentData);
    }, 2000);
  });
}

async function processStudentMarks() {
  try {
    const marks = await fetchMarks();
    console.log("Data received! Processing...");

    // 1. Filter: Find students who passed
    const passingStudents = marks.filter(student => student.marks >= 50);

    // 2. Map: Assign Letter Grades to each student
    const gradedStudents = marks.map(student => {
      let grade;
      if (student.marks >= 90) grade = 'A';
      else if (student.marks >= 75) grade = 'B';
      else if (student.marks >= 50) grade = 'C';
      else grade = 'F';
      
      return { ...student, grade };
    });

   
    const totalMarks = marks.reduce((acc, student) => acc + student.marks, 0);
    const average = totalMarks / marks.length;

    console.log("--- Report Card ---");
    console.table(gradedStudents); 
    console.log(`Class Average: ${average}%`);
    console.log(`Number of students passing: ${passingStudents.length}`);

  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

processStudentMarks();
