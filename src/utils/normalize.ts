export const positiveNumberNormalizer = (value: string) => {
  const newValue = value.replace(/\D/g, '');
  if (!newValue) {
    return '';
  }
  if (newValue && Number(newValue) <= 0) {
    return '0';
  }
  return parseInt(newValue, 10).toString()
};
