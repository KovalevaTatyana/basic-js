const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if (date === undefined) {
        return 'Unable to determine the time of year!';
    }

    if (date instanceof Date === false) {
        throw new Error('Invalid date!');
    }
    try {
        date.valueOf();
    }
    catch {
        throw new Error('Invalid date!');
    }
    let winter = new Array(11, 0, 1);
    let spring = new Array(2, 3, 4);
    let summer = new Array(5, 6, 7);
    let fall = new Array(8, 9, 10);
    let month = date.getMonth();
    if (winter.includes(month)) {
      return 'winter';
    }
    else if (spring.includes(month)) {
      return 'spring';
    }
    else if (summer.includes(month)) {
      return 'summer';
    }
    else if (fall.includes(month)) {
      return 'autumn (fall)';
    }
}

module.exports = {
  getSeason
};
