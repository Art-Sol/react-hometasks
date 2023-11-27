export const sortDataByTextValues = (
  data: Array<Record<string, string | number>>,
  field: string,
  reverse: boolean
) => {
  const sortedData = data.sort((a, b) => {
    if (String(a[field]).toLowerCase() < String(b[field]).toLowerCase()) {
      return -1;
    }
    if (String(a[field]).toLowerCase() > String(b[field]).toLowerCase()) {
      return 1;
    }
    return 0;
  });

  if (reverse) {
    sortedData.reverse();
  }

  return sortedData;
};
