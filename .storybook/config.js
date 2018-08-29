import { configure } from "@storybook/react";
import "normalize.css";

// const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  // req.keys().forEach(filename => req(filename));

  require("../src/theme/stories");
}

configure(loadStories, module);
