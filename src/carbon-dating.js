const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    let endActivity = Number.parseFloat(sampleActivity);
        if (typeof sampleActivity != 'string' || Number.isNaN(endActivity) || endActivity <= 0 || endActivity >= MODERN_ACTIVITY) {
            return false;
        }
        else {
            return Math.ceil((Math.log(endActivity / MODERN_ACTIVITY) / -0.693) * HALF_LIFE_PERIOD);
        }
}


module.exports = {
  dateSample
};
