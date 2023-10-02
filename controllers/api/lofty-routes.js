const router = require("express").Router();
const { Task, Attainable, Lofty, User } = require("../../models");
router.get("/", async (req, res) => {
  try {
    const data = await Lofty.findAll({
      include: [
        {
          model: Attainable,
          include: [
            {
              model: Task
            }
          ]
        },
      ],
    });    
    console.log("**************** Get ALL lofty route is hit ************");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Lofty.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: User,
        },
        {
          model: Attainable,
        },
        {
          model: Task,
        }
      ]
    });
    if (!data) {
      res.status(404).json({ message: "No lofty goal found with this id!" });
      return;
    }
    console.log("**************    lofty findbyID route hit *********");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Lofty.create(req.body);
    console.log("************ lofty post route is hit ************");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

// currently the put route only lets you change the name
router.put("/:id", async (req, res) => {
  try {
    const { lofty_name, note } = req.body;
    const data = await Lofty.update( { lofty_name }, {note} ,
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!data) {
      res.status(404).json({ message: "No lofty found with this id!" });
      return;
    }
    console.log("**************    lofty Put route hit *********");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Lofty.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!data) {
      res.status(404).json({ message: "No lofty goal found with this id!" });
      return;
    }
    console.log("**************    lofty Delete route hit *********");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
