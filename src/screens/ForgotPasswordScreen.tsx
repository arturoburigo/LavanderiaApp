import { Text, View, TouchableOpacity } from 'react-native';
import { InputButton } from '../components/InputButton';
import { BackButton } from '../components/ArrowBackButton';
import { StandardButton } from '../components/StandartButton';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ForgotPassword() {
  return (
    <SafeAreaView className="flex-1 w-full items-center bg-gray-100">
      <View className="w-96 py-7 px-6">
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
    </SafeAreaView>
  );
}
