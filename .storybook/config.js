import { configure } from "@storybook/react";
import "normalize.css";
import { injectGlobal } from "styled-components";

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

  body {
    font-family: "Source Sans Pro", sans-serif;
  }
`;

// const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  // req.keys().forEach(filename => req(filename));

  require("../src/theme/stories");
}

configure(loadStories, module);
