import { View, Text, ScrollView } from 'react-native';
import Logo from '../assets/logo.svg';
import { BackButton } from '../components/BackButton';
import { InputButton } from '../components/InputButton';
import { InputSelectLocation } from '../components/InputSelectLocation';

export function SelectLocation() {
  return (
    <View className="flex-1 w-full items-center bg-white">
      <View className="w-96  mt-4">
        <BackButton />
      </View>
      <View className="mt-12 w-80">
        <View className="items-center">
          <Logo />
        </View>
        <Text className="font-bold text-2xl mt-4">
          Sempre a lavanderia certa, Sempre perto de você!
        </Text>
      </View>
      <InputButton placeholder="Buscar endereço..." name="search" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InputSelectLocation adress="Rua Lauro Muller, 52" distance={0.7} hours="Aberto - 21:30" />
        <InputSelectLocation adress="Angeloni Supermercado" distance={0.9} hours="Aberto - 22:00" />
        <InputSelectLocation adress="Henrique Lage, 420" distance={2} hours="Aberto - 21:30" />
        <InputSelectLocation adress="Rua Lauro Muller, 52" distance={0.7} hours="Aberto - 21:30" />
        <InputSelectLocation adress="Angeloni Supermercado" distance={0.9} hours="Aberto - 22:00" />
        <InputSelectLocation adress="Henrique Lage, 420" distance={2} hours="Aberto - 21:30" />
      </ScrollView>
    </View>
  );
}
