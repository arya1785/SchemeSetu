const mongoose =
  require("mongoose");

const schemeSchema =
  new mongoose.Schema({

    title: {
      type: String,
      required: true,
    },



    category: {
      type: String,
      required: true,
    },



    schemeType: {
      type: String,

      enum: [
        "National",
        "State",
      ],

      required: true,
    },



    state: {
      type: String,
      required: true,
    },



    description: {
      type: String,
      required: true,
    },



    eligibility: {
      type: String,
      required: true,
    },



    occupation: {
      type: String,

      enum: [
        "Student",
        "Farmer",
        "Employee",
        "General",
      ],

      required: true,
    },



    incomeLimit: {
      type: Number,

      required: true,
    },



    department: {
      type: String,

      required: true,
    },



    applicationLink: {
      type: String,
      required: true,
    },

  });

module.exports =
  mongoose.model(
    "Scheme",
    schemeSchema
  );