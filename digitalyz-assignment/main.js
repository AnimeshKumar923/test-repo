const xlsx = require("xlsx");
const fs = require("fs");

// Load the Excel file
const workbook = xlsx.readFile("./dataset.xlsx");

// Read the sheets
const lecturerDetailsSheet = workbook.Sheets["Lecturer Details"];
const roomsDataSheet = workbook.Sheets["Rooms data"];
const coursesListSheet = workbook.Sheets["Course list"];
const studentRequestsSheet = workbook.Sheets["Student requests"];
const rulesSheet = workbook.Sheets["RULES"];

// Convert sheets to JSON
const lecturerDetails = xlsx.utils.sheet_to_json(lecturerDetailsSheet);
const roomsData = xlsx.utils.sheet_to_json(roomsDataSheet);
const coursesData = xlsx.utils.sheet_to_json(coursesListSheet);
const requestsTable = xlsx.utils.sheet_to_json(studentRequestsSheet);
const rules = xlsx.utils.sheet_to_json(rulesSheet);

// Clean the data (example: handling missing values)
const cleanData = (data) =>
  data.filter((row) =>
    Object.values(row).every((value) => value !== null && value !== undefined)
  );

const cleanedLecturerDetails = cleanData(lecturerDetails);
const cleanedRoomsData = cleanData(roomsData);
const cleanedCoursesData = cleanData(coursesData);
const cleanedRequestsTable = cleanData(requestsTable);

// Structure the data
const data = {
  lecturerDetails: cleanedLecturerDetails,
  roomsData: cleanedRoomsData,
  coursesData: cleanedCoursesData,
  requestsTable: cleanedRequestsTable,
  rules: rules,
};

// Convert to JSON
fs.writeFileSync("cleaned_data.json", JSON.stringify(data, null, 4));

// Validation functions
const validateData = (data, rules) => {
  const insights = [];

  // Example validation: Check if all courses have a valid room number
  data.coursesData.forEach((course) => {
    if (!course["Room Number"]) {
      insights.push(
        `Course ${course["Course Title"]} does not have a valid room number.`
      );
    }
  });

  // Example validation: Check if all courses have a valid lecturer
  data.coursesData.forEach((course) => {
    const lecturer = data.lecturerDetails.find(
      (lect) => lect["lecture Code"] === course["Course code"]
    );
    if (!lecturer) {
      insights.push(
        `Course ${course["Title"]} does not have a valid lecturer.`
      );
    }
  });

  // Validation: No teacher can be present twice in the same block
  const lecturerSchedule = {};
  data.coursesData.forEach((course) => {
    const lecturerId = course["Lecturer ID"];
    const block = course["Block"];
    if (!lecturerSchedule[lecturerId]) {
      lecturerSchedule[lecturerId] = new Set();
    }
    if (lecturerSchedule[lecturerId].has(block)) {
      insights.push(
        `Lecturer ${lecturerId} is scheduled for multiple courses in block ${block}.`
      );
    } else {
      lecturerSchedule[lecturerId].add(block);
    }
  });

  // Validation: No student can be present twice in the same block
  const studentSchedule = {};
  data.requestsTable.forEach((request) => {
    const studentId = request["Student ID"];
    const block = request["Block"];
    if (!studentSchedule[studentId]) {
      studentSchedule[studentId] = new Set();
    }
    if (studentSchedule[studentId].has(block)) {
      insights.push(
        `Student ${studentId} is scheduled for multiple courses in block ${block}.`
      );
    } else {
      studentSchedule[studentId].add(block);
    }
  });

  // Add more validations based on the rules
  // ...

  return insights;
};

// Run validations and list insights
const insights = validateData(data, rules);

// Log insights
console.log("Insights:", insights);

// Save insights to a file
fs.writeFileSync("insights.txt", insights.join("\n"));

console.log("Insights saved to insights.txt");
