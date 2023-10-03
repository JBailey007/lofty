const router = require('express').Router();
const { Task, Attainable, Lofty, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/lofty', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const loftyData = await Lofty.findAll({
      include: [
        {
          model: User,
          attributes: []
        },
      ],
    });

    // Serialize data so the template can read it
    const loftys = loftyData.map((lofty) => lofty.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('lofty', { 
      loftys,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//------------------------------------------------------------------------------------------
router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Lofty }],
    });

    const user = userData.get({ plain: true });

    res.render('login', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/lofty');

    return;
  }

  res.render('login');
});
// -------------------------------------------------------------------------------------------
router.get('/attainable', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const attainableData = await Attainable.findAll({
      include: [
        {
          model: Lofty,
          attributes: ["id"]
        },
      ],
    });

    // Serialize data so the template can read it
    const attainables = attainableData.map((attainable) => attainable.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('attainable', { 
      attainables,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/lofty/:id', withAuth, async (req, res) => {
  try {
    const id = req.params.id
    // console.log(id)
    // Get all projects and JOIN with user data
    const attainableData = await Attainable.findAll({
      include: [
        {
          model: Lofty,
          attributes: ["id"]
        },
      ],
    });
    // console.log(attainableData)
    // Serialize data so the template can read it
    const attainables = attainableData.map((attainable) => attainable.get({ plain: true })).filter( (x) => x.lofty_parent == id);
    // const loftyAttainables = attainables.filter( (x) => x.lofty_parent == id);
    console.log(attainables)
    // Pass serialized data and session flag into template
    res.render('attainable', { 
      attainables,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/attainable/:id', withAuth, async (req, res) => {
  try {
    const id = req.params.id
    // console.log(id)
    // Get all projects and JOIN with user data
    const taskData = await Task.findAll({
      include: [
        {
          model: Attainable,
          attributes: ["id"]
        },
      ],
    });
    // console.log(attainableData)
    // Serialize data so the template can read it
    const tasks = taskData.map((task) => task.get({ plain: true })).filter( (x) => x.attainable_parent == id);
    // const loftyAttainables = attainables.filter( (x) => x.lofty_parent == id);
    console.log(tasks)
    // Pass serialized data and session flag into template
    res.render('task', { 
      tasks,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/task', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const taskData = await Task.findAll({
      include: [
        {
          model: Attainable,
          attributes: ["id"]
        },
      ],
    });

    // Serialize data so the template can read it
    const tasks = taskData.map((task) => task.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('task', { 
      tasks,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;