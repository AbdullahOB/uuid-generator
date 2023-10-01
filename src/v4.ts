/**
 * Generate a Version 4 (randomly generated) UUID in the specified format.
 * @returns {string|null} A randomly generated UUID string or null if an error occurs.
 */
import crypto from 'crypto' // Import the crypto module for generating random bytes

function v4() {
  try {
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (character) {
      // Generate a random number in the range [0, 15] and truncate the decimal part
      const random = crypto.randomBytes(1)[0] % 16 | 0
      // For each 'x' character, use the random number; for 'y', generate one of 8, 9, A, or B
      const curr = character === 'x' ? random : (random & 0x3) | 0x8
      return curr.toString(16) // Convert the number to a hexadecimal string
    })

    return uuid // Return the generated UUID
  } catch (error) {
    return null // Handle any errors by returning null
  }
}

export { v4 } // Export the v4 function
