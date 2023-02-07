module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", '@whitespace/storybook-addon-html', "storybook-addon-preview/register"],
  "framework": "@storybook/angular",
  core: {
    builder: "webpack5"
  },
  features: { buildStoriesJson: true }
};