export function isEmail(value) {
  return value.includes('@');
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}

export function hasOnlyLetters(value) {
  // Regular expression to check for only letters (uppercase and lowercase)
  const regex = /^[A-Za-z]+$/;

  // Test the string against the regular expression
  return regex.test(value);
}