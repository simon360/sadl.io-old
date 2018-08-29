import { mapValues } from "../utilities";

export const unitlessSize = {
  standard: 1 // 1rem, =16px
};

// Append "rem" to every value in "unitless"
export default {
  size: mapValues(unitlessSize, value => `${value}rem`)
};
