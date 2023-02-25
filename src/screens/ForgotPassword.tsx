import { Text, View, TouchableOpacity } from 'react-native';
import { InputButton } from '../components/InputButton';
import { BackButton } from '../components/BackButton';
import { StandardButton } from '../components/StandartButton';

export function ForgotPassword() {
  return (
    <View className="flex-1 w-full items-center bg-gray-100">
      <View className="w-96  mt-10">
        <BackButton />
      </View>
      <View className="flex-1  w-80 items-center">
        <Text className="text-2xl font-bold">Resetar senha</Text>
        <Text className="mt-3 w-80 text-center">
          Se você esqueceu sua senha, digite o e-mail previamente registrado
        </Text>
        <View>
          <InputButton placeholder="Digite seu email" name="mail" keyboardType="email-address" />
          <StandardButton title="Send" />
        </View>
      </View>
    </View>
  );
}
