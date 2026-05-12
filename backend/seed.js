const mongoose =
  require("mongoose");

const connectDB =
  require("./config/db");

const Scheme =
  require("./models/Scheme");

connectDB();

const schemes = [

  // NATIONAL SCHEMES

  {
    title:
      "PM Kisan Samman Nidhi",

    category:
      "Agriculture",

    schemeType:
      "National",

    state:
      "India",

    description:
      "Financial assistance scheme for farmers across India.",

    eligibility:
      "Eligible farmers across India.",

    occupation:
      "Farmer",

    incomeLimit:
      800000,

    department:
      "Ministry of Agriculture",

    applicationLink:
      "https://pmkisan.gov.in",
  },



  {
    title:
      "Ayushman Bharat Yojana",

    category:
      "Public Welfare",

    schemeType:
      "National",

    state:
      "India",

    description:
      "Healthcare benefits for eligible citizens.",

    eligibility:
      "Economically weaker citizens.",

    occupation:
      "General",

    incomeLimit:
      500000,

    department:
      "Ministry of Health",

    applicationLink:
      "https://pmjay.gov.in",
  },



  {
    title:
      "National Scholarship Portal",

    category:
      "Education",

    schemeType:
      "National",

    state:
      "India",

    description:
      "Scholarship support for students across India.",

    eligibility:
      "Eligible students pursuing education.",

    occupation:
      "Student",

    incomeLimit:
      600000,

    department:
      "Ministry of Education",

    applicationLink:
      "https://scholarships.gov.in",
  },



  // MAHARASHTRA SCHEMES

  {
    title:
      "Rajarshi Shahu Maharaj Scholarship",

    category:
      "Education",

    schemeType:
      "State",

    state:
      "Maharashtra",

    description:
      "Financial support for economically weaker students in Maharashtra.",

    eligibility:
      "Eligible Maharashtra students.",

    occupation:
      "Student",

    incomeLimit:
      800000,

    department:
      "MahaDBT",

    applicationLink:
      "https://mahadbt.maharashtra.gov.in",
  },



  {
    title:
      "Mahatma Jyotirao Phule Shetkari Karjmukti Yojana",

    category:
      "Agriculture",

    schemeType:
      "State",

    state:
      "Maharashtra",

    description:
      "Loan waiver scheme for farmers in Maharashtra.",

    eligibility:
      "Eligible Maharashtra farmers.",

    occupation:
      "Farmer",

    incomeLimit:
      1000000,

    department:
      "Agriculture Department Maharashtra",

    applicationLink:
      "https://mjpsky.maharashtra.gov.in",
  },



  {
    title:
      "Maharashtra बेरोजगारी भत्ता योजना",

    category:
      "Employment",

    schemeType:
      "State",

    state:
      "Maharashtra",

    description:
      "Financial support for unemployed youth.",

    eligibility:
      "Eligible unemployed youth in Maharashtra.",

    occupation:
      "Employee",

    incomeLimit:
      400000,

    department:
      "MahaSwayam",

    applicationLink:
      "https://mahaswayam.gov.in",
  },



  {
    title:
      "Bal Sangopan Yojana",

    category:
      "Public Welfare",

    schemeType:
      "State",

    state:
      "Maharashtra",

    description:
      "Support scheme for vulnerable children and families.",

    eligibility:
      "Eligible children and guardians.",

    occupation:
      "General",

    incomeLimit:
      500000,

    department:
      "Women and Child Development",

    applicationLink:
      "https://womenchild.maharashtra.gov.in",
  },

];



const importData =
  async () => {

    try {

      await Scheme.deleteMany();

      await Scheme.insertMany(
        schemes
      );

      console.log(
        "Advanced Scheme Data Inserted"
      );

      process.exit();

    }

    catch (error) {

      console.log(error);

      process.exit(1);
    }
  };

importData();