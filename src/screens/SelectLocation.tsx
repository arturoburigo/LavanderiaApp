import { View, Text } from 'react-native';
import Logo from '../assets/logo.svg';
import { BackButton } from '../components/BackButton';
import { InputButton } from '../components/InputButton';

export function SelectLocation() {
  return (
    <View className="flex-1 w-full items-center bg-white">
      <View className="w-96  mt-4">
        <BackButton />
      </View>
      <View className="items-center">
        <View className="mt-12 w-80">
          <View className="items-center">
            <Logo className="items-center" />
          </View>
          <Text className="font-bold text-2xl mt-4">
            Sempre a lavanderia certa, Sempre perto de você!
          </Text>
        </View>
        <InputButton placeholder="Buscar endereço..." name="search" />
      </View>
    </View>
  );
}
