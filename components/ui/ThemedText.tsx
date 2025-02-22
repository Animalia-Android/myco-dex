import React from 'react';
import { Text, StyleSheet, TextProps, TextStyle } from 'react-native';
import { theme } from '@/components/ui/theme';

interface ThemedTextProps {
  children: React.ReactNode;
  style?: TextStyle; // Optional style for customization
}

export function ThemedText({ children, style }: ThemedTextProps) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: 24,
    color: theme.colors.textPrimary, // ✅ Ensures text is always readable
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.bold,
  },
  body: {
    fontSize: 16,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.regular,
  },
  caption: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    fontFamily: theme.fonts.regular,
  },
});
