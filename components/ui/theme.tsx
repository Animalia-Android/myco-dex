//theme.js - Global Theme for MycoDex
export const theme = {
  colors: {
    primary: '#00FF99', // Bioluminescent Green
    secondary: '#0077CC', // Futuristic Blue
    background: '#121212', // Deep Black
    card: 'rgba(255, 255, 255, 0.1)', // Glassmorphism effect
    textPrimary: '#FFFFFF',
    textSecondary: '#BBBBBB',
    accent: '#FFD700', // Earthy Gold for highlights
  },
  fonts: {
    regular: 'Poppins-Regular',
    bold: 'Poppins-Bold',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
};

// Usage in a component
// import { theme } from '../theme';
// const styles = StyleSheet.create({
//   container: { backgroundColor: theme.colors.background, padding: theme.spacing.medium },
//   text: { color: theme.colors.textPrimary, fontFamily: theme.fonts.regular },
// });
