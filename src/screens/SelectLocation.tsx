import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../assets/logo.svg';

import { BackButton } from '../components/BackButton';
import { InputButton } from '../components/InputButton';
import { InputSelectLocation } from '../components/InputSelectLocation';
import { SafeAreaView } from 'react-native-safe-area-context';

export function SelectLocation() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView className="flex-1">
      <View className="w-full items-center bg-gray-100">
        <View className="w-96  mt-4">
          <BackButton />
        </View>
        <View className="mt-4 w-80">
          <View className="items-center">
            <Logo />
          </View>
          <Text className="font-bold text-2xl mt-4">
            Sempre a lavanderia certa, Sempre perto de você!
          </Text>
        </View>
        <InputButton placeholder="Buscar endereço..." name="search" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <InputSelectLocation
            adress="Rua Lauro Muller, 52"
            distance={0.7}
            hours="Aberto - 21:30"
            onPress={() => navigate('homescreen')}
          />
          <InputSelectLocation
            adress="Angeloni Supermercado"
            distance={0.9}
            hours="Aberto - 22:00"
            onPress={() => navigate('homescreen')}
          />
          <InputSelectLocation
            adress="Henrique Lage, 420"
            distance={2}
            hours="Aberto - 21:30"
            onPress={() => navigate('homescreen')}
          />
          <InputSelectLocation
            adress="Henrique Lage, 420"
            distance={2}
            hours="Aberto - 21:30"
            onPress={() => navigate('homescreen')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
