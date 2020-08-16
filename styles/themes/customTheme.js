import { theme as chakraTheme } from '@chakra-ui/core';

const customTheme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter, Helvetica, Arial`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  icons: {
    ...chakraTheme.icons,
  },
};

export default customTheme;