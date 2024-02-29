import colors from "./src/styles/config/colors.js";
import shadows from "./src/styles/config/shadows.js";
import transitions from "./src/styles/config/transitions.js";

export default {
  plugins: {
    'postcss-simple-vars': {
      variables: {
        ...colors,
        ...shadows,
        ...transitions
      }
    },
    'autoprefixer': {},
    'postcss-nested': {},
  }
}