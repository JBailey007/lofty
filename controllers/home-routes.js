const router = require('express').Router();
const { Task, Attainable, Lofty, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const goalData = await Lofty.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const goals = goalData.map((goal) => goal.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      goals,
      // logged_in: req.session.logged_in ------------------NEED TO TURN ON
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/attainable', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const goalData = await Attainable.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const goals = goalData.map((goal) => goal.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('attainable', { 
      goals,
      // logged_in: req.session.logged_in ------------------NEED TO TURN ON
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/task', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const goalData = await Task.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const goals = goalData.map((goal) => goal.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('task', { 
      goals,
      // logged_in: req.session.logged_in ------------------NEED TO TURN ON
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/user', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const goalData = await User.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const goals = goalData.map((goal) => goal.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('login', { 
      goals,
      // logged_in: req.session.logged_in ------------------NEED TO TURN ON
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;