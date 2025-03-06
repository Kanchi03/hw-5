/* HW-5
Example 4 JavaScript code
*/
// Assuming studentList looks something like:
// const studentList = [
//   { first: "Allan", last: "Able", scores: [95, 85, 92, 98] },
//   { first: "Amy", last: "Alexander", scores: [80, 88, 100] },
//   { first: "Betty", last: "Barns", scores: [70, 80, 90, 100] },
//   { first: "Bob", last: "Bones", scores: [75, 85, 95, 85] },
//   { first: "Cindy", last: "Chase", scores: [95, 90, 92, 98] },
//   { first: "Charles", last: "Chips", scores: [88, 99, 90] }
// ];

// a. Add 5 extra credit points to each score
for (let i = 0; i < studentList.length; i++) {
    for (let j = 0; j < studentList[i].scores.length; j++) {
      studentList[i].scores[j] += 5;
    }
  }
  
  // b. Calculate average score for each student and add it to their scores array
  for (let i = 0; i < studentList.length; i++) {
    // Calculate the sum of scores
    let sum = 0;
    for (let j = 0; j < studentList[i].scores.length; j++) {
      sum += studentList[i].scores[j];
    }
    
    // Calculate average and add it to the scores array
    const average = sum / studentList[i].scores.length;
    studentList[i].scores.push(average);
  }
  
  // c. Display results
  for (let i = 0; i < studentList.length; i++) {
    console.log(`Full name (last, first): ${studentList[i].last}, ${studentList[i].first}`);
    console.log(`Updated scores are: ${studentList[i].scores.join(',')}`);
  }
console.log("Kanchi's Output from HW-5 Example 4")