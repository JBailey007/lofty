module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  render_shape: () => {
    // Return a random emoji
    if (goalLevel == "main") {
      return `<div><div class='box gold'></div>=${mainGoalTitle}</div>
      <br>`;
    } else if (goalLevel == "sub") {
      return `<div><div class='box blue'></div>= ${subGoalTitle}</div>
      <br>`;
    } else {
      return `<div><div class='box green'></div>= ${taskGoalTitle}</div>
      <br>`;
    }
  },
};
