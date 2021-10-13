module.exports = {
    format_date: (date) => {
      // Format date
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // Add commas to large numbers
      return parseInt(amount).toLocaleString();
    },
  };
  