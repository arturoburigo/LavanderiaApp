import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SelectLocation } from '../screens/SelectLocationScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { Profile } from '../screens/ProfileScreen';
import { WalletScreen } from '../screens/WalletScreen';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="Lojas"
        component={SelectLocation}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="map-pin" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="Carteira"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="credit-card" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}
