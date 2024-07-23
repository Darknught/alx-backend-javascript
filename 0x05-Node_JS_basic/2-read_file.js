// Import the built-in 'fs' module to interact with the file system
const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const countStudents = (dataPath) => {
  // Check if the file exists at the given path
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database'); // Throw an error if the file doesn't exist
  }
  // Check if the path is a file (not a directory or other types)
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database'); // Throw an error if it's not a file
  }
  
  // Read the content of the file synchronously and convert it to a string
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8') // Read the file content
    .toString('utf-8') // Ensure it's a UTF-8 string
    .trim() // Remove any leading/trailing whitespace
    .split('\n'); // Split the content into lines
  
  // Initialize an object to group students by their field of study
  const studentGroups = {};
  
  // Get the first line of the file, which contains the field names
  const dbFieldNames = fileLines[0].split(',');
  // Get the student property names (all fields except the last one)
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  // Loop through each line of the file, starting from the second line
  for (const line of fileLines.slice(1)) {
    // Split the line into individual student properties
    const studentRecord = line.split(',');
    // Get the values for student properties (all fields except the last one)
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    // Get the student's field of study (last field)
    const field = studentRecord[studentRecord.length - 1];
    
    // If the field is not already a key in the studentGroups object, add it
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    
    // Create an array of key-value pairs from property names and values
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    // Add the student to the appropriate group based on their field
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  // Calculate the total number of students
  const totalStudents = Object
    .values(studentGroups) // Get arrays of students grouped by field
    .reduce((pre, cur) => (pre || []).length + cur.length); // Sum the lengths of these arrays

  // Print the total number of students
  console.log(`Number of students: ${totalStudents}`);
  
  // Loop through each group of students and print the details
  for (const [field, group] of Object.entries(studentGroups)) {
    // Get the list of student names in the current group
    const studentNames = group.map((student) => student.firstname).join(', ');
    // Print the number of students in the current field and their names
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

// Export the countStudents function as a module
module.exports = countStudents;
