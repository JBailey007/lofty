const router = require('express').Router();
const { Task, Attainable, Lofty, User } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/api/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const goalData = await Lofty.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const goals = goalData.map((goal) => goal.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('login', { 
//       goals,
//       // logged_in: req.session.logged_in ------------------NEED TO TURN ON
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
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

// router.get('/user', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const goalData = await User.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const goals = goalData.map((goal) => goal.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('login', { 
//       goals,
//       // logged_in: req.session.logged_in ------------------NEED TO TURN ON
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;