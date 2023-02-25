import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppleLogo from '../assets/apple.svg';
import GoogleLogo from '../assets/google.svg';
import FacebookLogo from '../assets/facebook.svg';

import Logo from '../assets/logo.svg';
import { InputButton } from '../components/InputButton';
import { StandardButton } from '../components/StandartButton';

export function SignIn() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 w-screen bg-gray-100">
      <View className="items-center">
        <View className="mt-16 w-80">
          <View className="items-center">
            <Logo className="items-center" />
          </View>
          <Text className="font-bold text-2xl mt-4">
            Lavamos suas roupas com carinho e tecnologia!
          </Text>
        </View>
        <View className="mt-2">
          <InputButton placeholder="E-mail" name="mail" keyboardType="email-address" />
          <InputButton placeholder="Senha" name="lock" />
        </View>
      </View>
      <View className="items-center">
        <View className="w-80 items-end mt-5">
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigate('forgotpassword')}>
            <Text className="text-blue-600">Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-5">
        <StandardButton title="Entrar" onPress={() => navigate('selectlocation')} />
      </View>

      <View>
        <StandardButton title="Entrar com Apple" backgroundColor="bg-black" icon={AppleLogo} />
        <StandardButton
          title="Entrar com Google"
          textColor="text-indigo-900"
          backgroundColor="bg-white"
          borderColor="border-2 border-black"
          icon={GoogleLogo}
        />
        <StandardButton
          title="Entrar com Facebook"
          backgroundColor="bg-blue-600"
          icon={FacebookLogo}
        />
      </View>

      <View className="items-center justify-center mt-6">
        <TouchableOpacity onPress={() => navigate('signup')}>
          <Text className="text-blue-600 text-base">Não tem uma conta? Cadastre-se!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
