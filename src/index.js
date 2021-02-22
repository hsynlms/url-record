'use strict'

// import required local modules
const seoCharTable = require('./seoCharTable')

/**
 * Gets seo-friendly name
 * @param {string} name - Name / The text that will be slugified.
 * @param {boolean} convertNonWesternChars - A value indicating whether non western chars should be converted.
 * @param {boolean} allowUnicodeCharsInUrls - A value indicating whether Unicode chars are allowed.
 * @returns {string} Seo-friendly generated name
 */
const GetSeoFriendlyName = (name, convertNonWesternChars = true, allowUnicodeCharsInUrls = false) => {
  // validation
  if (typeof name !== 'string' || !name) return name

  // allowed characters
  const okChars = 'abcdefghijklmnopqrstuvwxyz1234567890 _-'

  // definition of seo-friendly output
  let output = ''

  // loop all characters in name
  for (let i = 0; i < name.length; i++) {
    // get the current iterator (character)
    let c = name.charAt(i)

    // validations
    if (convertNonWesternChars && c in seoCharTable) {
      // if non-western char conversion is enabled
      // try to get lower-case character from seo character table
      c = seoCharTable[c].toLowerCase()
    }

    // validations
    if (allowUnicodeCharsInUrls) {
      // unicode chars are allowed in URLs

      // validations
      if (/[a-zA-Z-0-9]/g.test(c) || okChars.indexOf(c) >= 0) {
        // if the character is letter or digit
        // or the character does exist in 'okChars'
        // append the char to the output
        output += c
      }
    } else if (okChars.indexOf(c) >= 0) {
      // if the unicode chars are not allowed in URLs
      // and the character does exist in 'okChars'
      // append the char to the output
      output += c
    }
  }

  // prepare output to be returned back
  output = output.replace(/\s/g, '-')

  while (output.indexOf('--') >= 0) {
    output = output.replace(/--/g, '-')
  }

  while (output.indexOf('__') >= 0) {
    output = output.replace(/__/g, '_')
  }

  if (output.slice(0, 1) === '-') {
    output = output.slice(1, output.length)
  }

  if (output.slice(-1) === '-') {
    output = output.slice(0, -1)
  }

  // return the output
  return output
}

// export the seo-friendly name generator function
module.exports = GetSeoFriendlyName
