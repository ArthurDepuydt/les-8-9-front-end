export function getVerkochteTelevisies(array) {
  let sold = 0;
  for (let i = 0; i < array.length; i++) {
    sold = sold + array[i].sold;
  }
  console.log(sold);
  return sold;
}

export function getIngekochteTelevisies(array) {
  let ingekocht = 0;
  for (let i = 0; i < array.length; i++) {
    ingekocht = ingekocht + array[i].originalStock;
  }
  console.log(ingekocht);
  return ingekocht;
}

export function getTeVerkopen(getIngekochteTelevisies, getVerkochteTelevisies) {
  return getIngekochteTelevisies - getVerkochteTelevisies;
}
