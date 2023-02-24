import { Text, View, TouchableOpacity } from 'react-native';
import { InputButton } from '../components/InputButton';
import { BackButton } from '../components/BackButton';
import { StandardButton } from '../components/StandartButton';

export function ForgotPassword() {
  return (
    <View className="flex-1 w-full items-center bg-white">
      <View className="w-96  mt-4">
        <BackButton />
      </View>
      <View className="flex-1 mt-52 w-80 items-center">
        <Text className="text-2xl font-bold">Password Reset</Text>
        <Text className="mt-3 w-80 text-center">
          If you forgot your password, please enter your email address previously registered
        </Text>
        <View className="mt-2">
          <InputButton placeholder="Digite seu email" name="mail" />
          <StandardButton title="Send" />
        </View>
      </View>
    </View>
  );
}
