import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';
import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        <Routes />
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}
