const db = require("../models/");
const Quiz = db.quizzes;

// Create and Save a new Quiz
exports.create = (req, res) => {
  // Validate request
  if (!req.body.question) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Quiz
  const quiz = new Quiz({
    question: req.body.question,
    options: req.body.options,
    answer: req.body.answer
  });

  // Save Quiz in the database
  quiz
    .save(quiz)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Quiz."
      });
    });
};

// Retrieve all Quizs from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Quiz.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving quizs."
      });
    });
};

// Find a single Quiz with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Quiz.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Quiz with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Quiz with id=" + id });
    });
};

// Update a Quiz by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Quiz.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Quiz with id=${id}. Maybe Quiz was not found!`
        });
      } else res.send({ message: "Quiz was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Quiz with id=" + id
      });
    });
};

// Delete a Quiz with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Quiz.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Quiz with id=${id}. Maybe Quiz was not found!`
        });
      } else {
        res.send({
          message: "Quiz was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Quiz with id=" + id
      });
    });
};

// Delete all Quizs from the database.
exports.deleteAll = (req, res) => {
  Quiz.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Quizs were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all quizs."
      });
    });
};

// Find all published Quizs
exports.findAllPublished = (req, res) => {
  Quiz.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving quizs."
      });
    });
};
