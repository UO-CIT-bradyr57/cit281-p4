const { get } = require("http");
const { req } = require("pino-std-serializers");
const { data } = require("./p4-modules.js");
const fastify = require("fastify")();
const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
} = require("./p4-modules.js");

// Route: /cit/question
fastify.get("/cit/question", function (request, reply) {
  // home route
  PassObj = { error: "", statusCode: 200, questions: getQuestions() };
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(PassObj);
});

// Route: /cit/answer
fastify.get("/cit/answer", function (request, reply) {
  // home route
  PassObj = { error: "", statusCode: 200, answers: getAnswers() };
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(PassObj);
});

// Route: /cit/questionanswer
fastify.get("/cit/questionanswer", function (request, reply) {
  PassObj = {
    error: "",
    statusCode: 200,
    questions_answers: getQuestionsAnswers(),
  };
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(PassObj);
});

// Route: /cit/question/:number
fastify.get("/cit/question/:number", function (request, reply) {
  let { number } = request.params;
  PassObj = {
    error: "",
    statusCode: 200,
    question: getQuestion(number).question,
    number: parseInt(number),
  };
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(PassObj);
});

// Route: /cit/answer/:number
fastify.get("/cit/answer/:number", function (request, reply) {
  let { number } = request.params;
  PassObj = {
    error: "",
    statusCode: 200,
    answer: getAnswer(number).answer,
    number: parseInt(number),
  };
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(PassObj);
});

// Route: /cit/questionanswer/:number
fastify.get("/cit/questionanswer/:number", function (request, reply) {
  let { number } = request.params;
  PassObj = {
    error: "",
    statusCode: 200,
    question: getQuestionAnswer(number).question,
    answer: getQuestionAnswer(number).answer,
    number: parseInt(number),
  };
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(PassObj);
});

fastify.get("*", (request, reply) => {
  PassObj = {
    error: "Route not found",
    statusCode: 404,
  };
  reply
    .code(404)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(PassObj);
});

const listenIP = "localhost";
const listenPort = 8085;
fastify.listen(listenPort, listenIP, function (err, address) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`server listening on ${listenIP}:${listenPort}`);
});
