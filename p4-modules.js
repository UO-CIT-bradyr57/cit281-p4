const { data } = require("./p4-data.js");

// Function 1
function getQuestions() {
  let result = [];
  for (const ques of data) {
    result.push(ques.question);
  }
  return result;
}

// Function 2
function getAnswers() {
  let result = [];
  for (const ans of data) {
    result.push(ans.answer);
  }
  return result;
}

// Function 3
function getQuestionsAnswers() {
  const NewData = JSON.parse(JSON.stringify(data));
  return NewData;
  // return data.map((original) => {
  //  return { ...original };
  //});
}

// Function 4
function getQuestion(number = "") {
  i = number - 1;
  result = {
    question: data[i].question,
    number: number,
    error: "",
  };
  return result;
}

// Function 5
function getAnswer(number = "") {
  i = number - 1; //start index at 0
  result = {
    answer: data[i].answer,
    number: number,
    error: "",
  };
  return result;
}

// Function 6
function getQuestionAnswer(number = "") {
  i = number - 1; //start index at 0
  result = {
    question: data[i].question,
    answer: data[i].answer,
    number: number,
    error: "",
  };
  return result;
}

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing("getQuestion", { d: "(1)", f: getQuestion(1) });
}

// getAnswer()
if (testGetA) {
  testing("getAnswer", { d: "(1)", f: getAnswer(1) });
}

// getQuestionAnswer()
if (testGetQA) {
  testing("getQuestionAnswer", { d: "(1)", f: getQuestionAnswer(1) });
}

module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
};
