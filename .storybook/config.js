import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
const req = require.context("../packages", true, /__stories__\/.*.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);