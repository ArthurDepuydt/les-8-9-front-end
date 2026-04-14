import { inventory } from "./inventory.js";

function showOutcomeInConsole(inventory) {
  let TvNames = inventory.map((tv) => {
    return tv.name;
  });

  let TvSoldout = inventory.filter((tv) => {
    return tv.originalStock <= tv.sold;
  });

  let TvForSports = inventory.map((tv) => {
    if (tv.refreshRate >= 100) {
      tv.suitable = true;
    } else {
      tv.suitable = false;
    }
    return { name: tv.name, suitable: tv.suitable };
  });

  let bigTv = inventory.filter((tv) => {
    let sizes = tv.availableSizes.filter((size) => {
      return size > 64;
    });
    return sizes.length > 0;
  });

  let ambiTv = inventory.filter((tv) => {
    let tvOptions = tv.options.filter((option) => {
      return option.name == "ambiLight" && option.applicable == true;
    });
    return tvOptions.length > 0;
  });

  console.log(ambiTv);
}

export default showOutcomeInConsole;
