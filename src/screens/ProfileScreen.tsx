import profileImage from '../assets/profile.png';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileButtons } from '../components/ProfileButtons';

export function Profile() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView className="items-center">
      <StatusBar style="dark" />
      <View className="bg-blue-600 w-80 rounded-lg py-3 mt-12 flex-row items-center">
        <View className="px-3">
          <View className="w-20 h-20 bg-white rounded-full items-center overflow-hidden">
            <Image source={profileImage} resizeMode="cover" className="flex-1 w-full h-full" />
          </View>
        </View>

        <View>
          <Text className="text-white text-3xl font-bold">Arturo Burigo</Text>
          <Text className="text-gray-300 mt-1 text-base">burigoarturo3@gmail.com</Text>
        </View>
      </View>
      <View className="mt-2">
        <ProfileButtons name="search" title="Consultar Historico" />
        <ProfileButtons name="info" title="Termos de uso" />
        <ProfileButtons name="database" title="Alterar dados" />
        <ProfileButtons name="help-circle" title="Ajuda" />
        <ProfileButtons
          name="x-circle"
          title="Sair"
          backgroundColor="bg-white"
          textColor="text-black"
          iconColor="red"
          borderColor="border-2"
          onPress={() => navigate('signin')}
        />
      </View>
    </SafeAreaView>
  );
}
