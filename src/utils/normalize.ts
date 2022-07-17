/**
 * Function accepts string arg and returns normalized positive digit value.
 * (removes non-digits symbols and leading 0)
 * 
 * @param {string} value
 * @returns {string} number without leading 0
 */
export function positiveNumberNormalizer(value: string): string {
  const newValue = value.replace(/\D/g, '');
  if (!newValue) {
    return '';
  }
  if (newValue && Number(newValue) <= 0) {
    return '0';
  }
  return parseInt(newValue, 10).toString();
};
