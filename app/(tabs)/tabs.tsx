import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

// import HomeScreen from '../index';
import ScanScreen from './scan';
import SearchScreen from './search';
import CollectionScreen from './collection';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
      }}
    >
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Collection" component={CollectionScreen} />
    </Tab.Navigator>
  );
}
