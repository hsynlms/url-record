'use strict'

// definition of helper methods
const helpers = {
  /**
   * Takes a hexadecimal string and converts it to an Unicode character
   * @param {string} hexString - A four-digit number in hex notation (eg, 00E7).
   */
  ToUnichar: (hexString) => {
    return String.fromCodePoint(`0x${hexString}`)
  }
}

// export the helpers object
module.exports = helpers
