import { unitlessSize as typeSize } from "./type";
import { mapValues } from "../utilities";

const one = (3 * typeSize.standard) / 2; // 1.5rem, =24px

export const unitless = {
  // Base
  one,

  // Smaller
  half: one / 2,
  threeQuarters: (3 * one) / 4,

  // Larger
  oneAndHalf: (3 * one) / 2,
  two: 2 * one,
  three: 3 * one,
  four: 4 * one
};

console.log(unitless);

export default mapValues(unitless, value => `${value}rem`);
