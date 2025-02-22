import { View, StyleSheet } from 'react-native';
import { theme } from '@/components/ui/theme';

export function ThemedView({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background, // Ensures consistent theme
    padding: theme.spacing.medium,
    borderRadius: theme.spacing.small,
  },
});
