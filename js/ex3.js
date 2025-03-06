/* HW-5
Example 3 JavaScript code
*/
// Define an array of student objects, each containing first name, last name, and an array of scores
const studentList = [
    {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
    },
    {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
    },
    {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
    }
  ];
  
  // Initialize an empty array to store results for students whose first name starts with 'C' or 'c'
  let cLastNameResults = [];
  let i;
  //Iterating of each student in the studentList array using for loop
  for(i=0;i<studentList.length;i++){
    if(studentList[i].firstName[0]=='C'||studentList[i].firstName[0]=='c'){
      //Initialization of an empty object to store data for the current student
      let data = {};
  
      // Copy first name and last name to the data object
      data.firstName=studentList[i].firstName;
      data.lastName=studentList[i].lastName;
  
      // Initialize variables to calculate min, max, and average scores
      let minScore = studentList[i].scores[0],
          maxScore = studentList[i].scores[0],
          avgScore = 0;
  
      // Initialize a variable to store the sum of scores
      let sum = 0;
  
      // Loop through each score for the current student
      for(let j=0;j<studentList[i].scores.length;j++){
        // Get the current score value
        let val = studentList[i].scores[j];
  
        // Add the score to the sum
        sum += val;
  
        // Update minScore if the current score is less than the current minScore
        if (val < minScore)
          minScore = val;
  
        // Update maxScore if the current score is greater than the current maxScore
        if (maxScore < val)
          maxScore = val;
      }
  
      // Calculate the average score for the current student
      avgScore = sum / studentList[i].scores.length;
  
      // Add minScore, maxScore, and avgScore to the data object
      data.minScore=minScore;
      data.maxScore=maxScore;
      data.avgScore=avgScore;
  
      // Push the data object to the cLastNameResults array
      cLastNameResults.push(data);
    }
  }
  
  // Print the results for students whose first name starts with 'C' or 'c'
  console.log(cLastNameResults);
console.log("Kanchi's Output from HW-5 Example 3")