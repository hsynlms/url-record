'use strict'

const helpers = {
  /**
   * Takes a hexadecimal string and converts it to an Unicode character
   * @param {string} hexString - A four-digit number in hex notation (eg, 00E7).
   * @returns {string} Unicode character of the given hexadecimal string
   */
  ToUnichar: hexString => {
    return String.fromCodePoint(`0x${hexString}`)
  }
}

module.exports = helpers
