const User = require('./User');
const Task = require('./Task');
const Lofty = require('./Lofty');
const Attainable = require('./Attainable');


// User.hasMany(Goal, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Goal.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Task, Lofty, Attainable };