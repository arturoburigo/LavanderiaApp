import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StandardButton } from '../components/StandartButton';

export function Profile() {
  return (
    <SafeAreaView className="items-center">
      <StatusBar style="dark" />
      <View className="bg-blue-500 w-5/6 rounded-lg py-3 mt-12 flex-row items-center">
        <View className="px-6">
          <View className="w-20 h-20 bg-white px-4 rounded-full items-center ">
            <Text>OIE</Text>
          </View>
        </View>

        <View>
          <Text className="text-white text-3xl font-bold">Arturo Burigo</Text>
          <Text className="text-gray-300 mt-1 text-base">burigoarturo3@gmail.com</Text>
        </View>
      </View>
      <View className="mt-2">
        <StandardButton className="" title="Consultar Historico" />

        <StandardButton className="" title="Termos de uso" />
        <StandardButton className="" title="Alterar Dados" />
        <StandardButton className="" title="Ajuda" />
        <StandardButton backgroundColor="bg-white" textColor="text-black" title="Sair" />
      </View>
    </SafeAreaView>
  );
}
