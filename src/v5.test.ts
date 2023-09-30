import { describe, expect, test } from '@jest/globals'
import { v5 } from './v5'

describe('v5 function', () => {
  const namespace = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'
  const contentName = 'example-content'

  test('generate a valid UUID', () => {
    const uuid = v5(namespace, contentName)

    // Check if the generated UUID is a valid UUIDv3
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-5[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/

    expect(uuid).toMatch(uuidRegex)
  })

  test('generate the same UUID for the same inputs', () => {
    // Generate UUIDs for the same inputs twice
    const uuid1 = v5(namespace, contentName)
    const uuid2 = v5(namespace, contentName)

    // Check if the generated UUIDs are the same
    expect(uuid1).toEqual(uuid2)
  })

  test('handle missing namespace or name gracefully', () => {
    // Test with missing namespace
    const missingNamespace = v5('', contentName)
    expect(missingNamespace).toBeNull()

    // Test with missing name
    const missingName = v5(namespace, '')
    expect(missingName).toBeNull()
  })
})
