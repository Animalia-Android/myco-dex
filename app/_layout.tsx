// import {
//   DarkTheme as NavigationDarkTheme,
//   DefaultTheme as NavigationDefaultTheme,
//   ThemeProvider,
// } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';
// import { theme } from '@/components/ui/theme'; // Import custom theme

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// // Custom Navigation Themes with MycoDex Colors
// const CustomLightTheme = {
//   ...NavigationDefaultTheme,
//   colors: {
//     ...NavigationDefaultTheme.colors,
//     background: theme.colors.background,
//     primary: theme.colors.primary,
//     text: theme.colors.textPrimary,
//     card: theme.colors.card,
//   },
// };

// const CustomDarkTheme = {
//   ...NavigationDarkTheme,
//   colors: {
//     ...NavigationDarkTheme.colors,
//     background: theme.colors.background,
//     primary: theme.colors.accent,
//     text: theme.colors.textSecondary,
//     card: theme.colors.card,
//   },
// };

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider
//       value={colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme}
//     >
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }

// import {
//   DarkTheme as NavigationDarkTheme,
//   DefaultTheme as NavigationDefaultTheme,
//   ThemeProvider,
// } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';
// import { theme } from '@/components/ui/theme';
// import { ThemedText } from '@/components/ui/ThemedText';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   // ✅ Load Poppins fonts
//   const [loaded] = useFonts({
//     PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
//     PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   // ✅ Prevent app from rendering until fonts are fully loaded
//   if (!loaded) {
//     return null;
//   }

//   // ✅ Inject custom theme colors
//   const CustomLightTheme = {
//     ...NavigationDefaultTheme,
//     colors: {
//       ...NavigationDefaultTheme.colors,
//       background: theme.colors.background,
//       primary: theme.colors.primary,
//       text: theme.colors.textPrimary,
//       card: theme.colors.card,
//     },
//   };

//   const CustomDarkTheme = {
//     ...NavigationDarkTheme,
//     colors: {
//       ...NavigationDarkTheme.colors,
//       background: theme.colors.background,
//       primary: theme.colors.accent,
//       text: theme.colors.textSecondary,
//       card: theme.colors.card,
//     },
//   };

//   return (
//     <ThemeProvider
//       value={colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme}
//     >
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { theme } from '@/components/ui/theme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const CustomLightTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      background: theme.colors.background, // ✅ Ensure this is correct
      primary: theme.colors.primary,
      text: theme.colors.textPrimary,
      card: theme.colors.card,
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      background: theme.colors.background, // ✅ Ensure this is correct
      primary: theme.colors.accent,
      text: theme.colors.textSecondary,
      card: theme.colors.card,
    },
  };

  return (
    <ThemeProvider
      value={colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme}
    >
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: theme.colors.background }, // ✅ Set background here
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
