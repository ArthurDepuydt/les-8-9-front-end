export function getTvName(TV) {
  return `${TV.brand} ${TV.type} - ${TV.name}`;
}

export function getTvPrice(TV) {
  return `€${TV.price},-`;
}

export function getTvGroottes(TV) {
  let grootteString = ``;
  for (let i = 0; i < TV.availableSizes.length; i++) {
    if (i == TV.availableSizes.length - 1) {
      grootteString =
        grootteString +
        `${TV.availableSizes[i]} inch (${TV.availableSizes[i] * 2.54}) `;
    } else {
      grootteString =
        grootteString +
        `${TV.availableSizes[i]} inch (${TV.availableSizes[i] * 2.54}) | `;
    }
  }
  return grootteString;
}
