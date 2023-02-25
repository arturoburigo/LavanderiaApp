import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { InputButton } from '../components/InputButton';
import { StandardButton } from '../components/StandartButton';

import AppleLogo from '../assets/apple.svg';
import GoogleLogo from '../assets/google.svg';
import FacebookLogo from '../assets/facebook.svg';

export function SignUp() {
  const { goBack } = useNavigation();

  return (
    <View className="flex-1 w-full items-center bg-gray-100">
      <View className="w-96 ml-14 items-start mt-5">
        <View className="mt-12 text-center items-start">
          <Text className="font-bold text-4xl">Cadastre-se!</Text>
          <View className="w-80 mt-2 ">
            <Text className="text-base text-gray-600">Tenha a sua lavanderia na palma da mão!</Text>
          </View>
        </View>
      </View>
      <View className="mt-3">
        <InputButton placeholder="Nome Completo" name="user" keyboardType="email-address" />
        <InputButton placeholder="E-mail" name="mail" keyboardType="email-address" />
        <InputButton placeholder="Senha" name="lock" />
        <InputButton placeholder="Confirmar Senha" name="lock" />
      </View>
      <View className="mt-4">
        <StandardButton title="Cadastrar" />
        <View>
          <StandardButton title="Cadastrar com Apple" backgroundColor="bg-black" icon={AppleLogo} />
          <StandardButton
            title="Cadastrar com Google"
            textColor="text-indigo-900"
            backgroundColor="bg-white"
            borderColor="border-2 border-black"
            icon={GoogleLogo}
          />
          <StandardButton
            title="Cadastrar com Facebook"
            backgroundColor="bg-blue-600"
            icon={FacebookLogo}
          />
        </View>
      </View>
      <TouchableOpacity className="mt-6" onPress={goBack}>
        <Text className="text-blue-600 text-base">Já possui uma conta? Entre!</Text>
      </TouchableOpacity>
    </View>
  );
}
