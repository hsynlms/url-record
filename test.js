'use strict'

const getSeoFriendlyName = require('./src/index')

// eslint-disable-next-line
test('handling no argument', () => {
  // eslint-disable-next-line
  expect(getSeoFriendlyName()).toBe(undefined)
})

// eslint-disable-next-line
test('handling empty string', () => {
  // eslint-disable-next-line
  expect(getSeoFriendlyName('')).toBe('')
})

// eslint-disable-next-line
test('handling accents', () => {
  // eslint-disable-next-line
  expect(getSeoFriendlyName('á é í ó ú ç áéíóúç')).toBe('a-e-i-o-u-c-aeiouc')
})

// eslint-disable-next-line
test('handling strings with no alphanumeric characters', () => {
  // eslint-disable-next-line
  expect(getSeoFriendlyName('- ( ) [ ]')).toBe('')
})

// eslint-disable-next-line
test('handling no alphanumeric Turkish characters', () => {
  // eslint-disable-next-line
  expect(getSeoFriendlyName('ıöüşçğ İÖÜŞÇĞ')).toBe('iouscg-iouscg')
})

// eslint-disable-next-line
test('handling some special characters', () => {
  // eslint-disable-next-line
  expect(getSeoFriendlyName('`¨~´æß@€₺>£#$½{[]}\|/_?=)(&%+^\'!é".,:;')).toBe('s_e')
})

// eslint-disable-next-line
test('handling start and end with dashes/hyphens', () => {
  // eslint-disable-next-line
  expect(getSeoFriendlyName('--hello-world--')).toBe('hello-world')
})
