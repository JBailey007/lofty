const User = require('./User');
const Task = require('./Task');
const Lofty = require('./Lofty');
const Attainable = require('./Attainable');


User.hasMany(Lofty, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Lofty.belongsTo(User, {
  foreignKey: 'user_id'
});

Lofty.hasMany(Attainable, {
    foreignKey: 'lofty_id',
    onDelete: 'CASCADE'
});

Attainable.belongsTo(Lofty,{
    foreignKey: 'lofty_id'
});

Attainable.hasMany(Task,{
    foreignKey: 'attainable_id',
    onDelete: 'CASCADE'
});

Task.belongsTo(Attainable,{
    foreignKey: 'task_id'
});

module.exports = { User, Task, Lofty, Attainable };