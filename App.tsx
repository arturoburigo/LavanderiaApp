import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1 bg-gray-100">
        <Routes />
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}
