import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <View className="flex-1 bg-gray-100">
        <Routes />
        <StatusBar style="auto" />
      </View>
    </>
  );
}
