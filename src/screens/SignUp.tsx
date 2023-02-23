import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { InputButton } from '../components/InputButton';
import { StandardButton } from '../components/StandartButton';

export function SignUp() {
  const { goBack } = useNavigation();

  return (
    <View className="flex-1 w-full items-center bg-white">
      <View className="w-96 ml-14 items-start">
        <View className="mt-12 text-center items-start">
          <Text className="font-bold text-4xl">Cadastre-se!</Text>
          <View className="w-80 ">
            <Text className="text-base text-gray-600">Tenha a sua lavanderia na palma da mão!</Text>
          </View>
        </View>
      </View>
      <View className="mt-4 ">
        <InputButton placeholder="Nome Completo" name="user" keyboardType="email-address" />
        <InputButton placeholder="E-mail" name="mail" keyboardType="email-address" />
        <InputButton placeholder="Senha" name="lock" />
        <InputButton placeholder="Confirmar Senha" name="lock" />
      </View>
      <View className="mt-4">
        <StandardButton title="Cadastrar" />
      </View>
      <TouchableOpacity className="mt-6" onPress={goBack}>
        <Text className="text-blue-600">Já possui uma conta? Entre!</Text>
      </TouchableOpacity>
    </View>
  );
}
