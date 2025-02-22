// import { Image, StyleSheet, Platform } from 'react-native';
// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ui/ThemedText';
// import { ThemedView } from '@/components/ui/ThemedView';
// import { theme } from '@/components/ui/theme';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{
//         light: theme.colors.primary, // Futuristic green
//         dark: theme.colors.card, // Glassmorphic effect
//       }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }
//     >
//       {/* Welcome Section */}
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome to MycoDex!</ThemedText>
//         <HelloWave />
//       </ThemedView>

//       {/* Steps Section */}
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try It</ThemedText>
//         <ThemedText>
//           Edit{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{' '}
//           to see changes. Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>

//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this
//           starter app.
//         </ThemedText>
//       </ThemedView>

//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a Fresh Start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{' '}
//           to reset the app. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: theme.spacing.small,
//     paddingVertical: theme.spacing.medium,
//   },
//   stepContainer: {
//     backgroundColor: theme.colors.card, // Ensures visibility
//     padding: theme.spacing.medium,
//     borderRadius: theme.spacing.small,
//     marginBottom: theme.spacing.medium,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ui/ThemedText';
import { theme } from '@/components/ui/theme';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Image
          source={require('@/assets/images/mycodex-logo.png')} // Update with a relevant MycoDex logo
          style={styles.logo}
        />
        <ThemedText style={styles.welcomeText}>Welcome to MycoDex</ThemedText>
        <ThemedText style={styles.subtitle}>
          Identify, catalog, and explore the world of fungi.
        </ThemedText>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => router.push('/scan')}
        >
          <ThemedText style={styles.buttonText}>Scan a Mushroom 🍄</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => router.push('/search')}
        >
          <ThemedText style={styles.buttonText}>Search Fungi 🔍</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => router.push('/collection')}
        >
          <ThemedText style={styles.buttonText}>My Collection 📂</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background, // Ensure dark theme works
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.large,
  },
  hero: {
    alignItems: 'center',
    marginBottom: theme.spacing.large,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: theme.spacing.medium,
  },
  welcomeText: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.small,
  },
  actions: {
    width: '100%',
    gap: theme.spacing.medium,
  },
  actionButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.medium,
    borderRadius: theme.spacing.small,
    alignItems: 'center',
    shadowColor: theme.colors.textPrimary,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
});
