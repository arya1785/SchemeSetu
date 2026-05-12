const express =
  require("express");

const router =
  express.Router();

const Scheme =
  require("../models/Scheme");



// GET ALL SCHEMES

router.get(
  "/",
  async (req, res) => {

    try {

      const schemes =
        await Scheme.find();

      res.json(schemes);

    }

    catch (error) {

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  }
);



// GET SINGLE SCHEME

router.get(
  "/:id",
  async (req, res) => {

    try {

      const scheme =

        await Scheme.findById(
          req.params.id
        );



      if (!scheme) {

        return res
          .status(404)
          .json({
            message:
              "Scheme not found",
          });
      }



      res.json(scheme);

    }

    catch (error) {

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  }
);



// CREATE

router.post(
  "/",
  async (req, res) => {

    try {

      const newScheme =
        new Scheme({

          title:
            req.body.title,

          category:
            req.body.category,

          schemeType:
            req.body.schemeType,

          state:
            req.body.state,

          description:
            req.body.description,

          eligibility:
            req.body.eligibility,

          occupation:
            req.body.occupation,

          incomeLimit:
            req.body.incomeLimit,

          department:
            req.body.department,

          applicationLink:
            req.body.applicationLink,
        });



      const savedScheme =

        await newScheme.save();



      res
        .status(201)
        .json(savedScheme);

    }

    catch (error) {

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  }
);



// UPDATE

router.put(
  "/:id",
  async (req, res) => {

    try {

      const updatedScheme =

        await Scheme.findByIdAndUpdate(

          req.params.id,

          req.body,

          {
            returnDocument:
              "after",
          }
        );



      res.json(
        updatedScheme
      );

    }

    catch (error) {

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  }
);



// DELETE

router.delete(
  "/:id",
  async (req, res) => {

    try {

      const scheme =

        await Scheme.findById(
          req.params.id
        );



      if (!scheme) {

        return res
          .status(404)
          .json({
            message:
              "Scheme not found",
          });
      }



      await scheme.deleteOne();



      res.json({
        message:
          "Scheme deleted successfully",
      });

    }

    catch (error) {

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  }
);

module.exports = router;