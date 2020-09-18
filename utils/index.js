/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
export const onlyUnique = (value, index, self) => self.indexOf(value) === index;

export const uniqueArrayOfObjects = (arr) => {
  // Store the unique
  const uniques = [];

  // Track the items added to the uniques
  const itemsFound = {};
  for (const val of arr) {
    // If item is already added then move to the next item
    if (itemsFound[val.id]) {
      continue;
    }
    // Else push it to the unique list
    uniques.push(val);
    // Mark it as added
    itemsFound[val.id] = true;
  }
  // Return the uniques
  return uniques;
};
