const router = require("express").Router();
const { Task, Attainable, Lofty, User } = require("../../models");
router.get("/", async (req, res) => {
  try {
    const data = await Attainable.findAll();
    console.log("**************** Get ALL attainable is hit ************");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Attainable.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!data) {
      res.status(404).json({ message: "No attainable goal found with this id!" });
      return;
    }
    console.log("**************    attainable findbyID route hit *********");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Attainable.create(req.body);
    console.log("************ attainable post route is hit ************");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

// currently the put route only lets you change the name
router.put("/:id", async (req, res) => {
  try {
    const { attainable_name } = req.body;
    const data = await Attainable.update(
      { attainable_name },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!data) {
      res.status(404).json({ message: "No attainable found with this id!" });
      return;
    }
    console.log("**************    attainable Put route hit *********");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Attainable.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!data) {
      res.status(404).json({ message: "No attainable goal found with this id!" });
      return;
    }
    console.log("**************    attainable Delete route hit *********");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
