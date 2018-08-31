import { setOptions } from "@storybook/addon-options";
import { configure } from "@storybook/react";
import "normalize.css";
import { injectGlobal } from "styled-components";
import theme from "../src/theme";

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

  body {
    font-family: ${theme.type.family};
  }
`;

setOptions({
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/
});

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));

  require("../src/theme/stories");
}

configure(loadStories, module);
