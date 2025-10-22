import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import { initialize, mswLoader } from "msw-storybook-addon";

// Registers the msw addon
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  loaders: [mswLoader],
};

export default preview;
