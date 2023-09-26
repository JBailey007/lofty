const router = require("express").Router();
const { Task, Attainable, Lofty, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const data = await Task.findAll();
    console.log("**************** Get ALL task route is hit ************");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Task.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!data) {
      res.status(404).json({ message: "No task found with this id!" });
      return;
    }
    console.log("**************    task findbyID route hit *********");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Task.create(req.body);
    console.log("************ task post route is hit ************");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

// currently the put route only lets you change the name
router.put("/:id", async (req, res) => {
  try {
    const { task_name } = req.body;
    const data = await Task.update( { task_name } ,
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!data) {
      res.status(404).json({ message: "No task found with this id!" });
      return;
    }
    console.log("**************  task Put route hit *********");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Task.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!data) {
      res.status(404).json({ message: "No task found with this id!" });
      return;
    }
    console.log("**************    task Delete route hit *********");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
