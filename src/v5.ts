import { createHash } from 'crypto'

function v5(namespace: string, name: string) {
  try {
    if (!namespace || !name) {
      throw new Error('Both namespace and name must be provided.')
    }

    // Calculate the SHA-256 hash of the namespace and name.
    const sha256Hash = calculateSHA256Hash(namespace + name)
    const version = 5 // the uuid version number

    // Format the UUID according to Version 3 specifications.
    const uuid = `${sha256Hash.slice(0, 8)}-${sha256Hash.slice(8, 12)}-${version.toString(16)}${sha256Hash.slice(
      13,
      16
    )}-8${sha256Hash.slice(17, 20)}-${sha256Hash.slice(20, 32)}`

    return uuid
  } catch (error) {
    return null
  }
}

/**
 * Calculate the SHA-256 hash of a string.
 * @param {string} input - The input string to hash.
 * @returns {string} The SHA-256 hash of the input string.
 */
function calculateSHA256Hash(input: string): string {
  return createHash('sha256').update(input).digest('hex')
}

export { v5 }
