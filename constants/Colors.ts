/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#00FF99'; // Bioluminescent Green
const tintColorDark = '#FFD700'; // Earthy Gold

export const Colors = {
  light: {
    text: '#11181C',
    background: '#FFFFFF', // Light mode background
    tint: tintColorLight,
    icon: '#0077CC', // Futuristic Blue
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#121212', // Dark mode background
    tint: tintColorDark,
    icon: '#00FF99', // Bioluminescent Green
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
