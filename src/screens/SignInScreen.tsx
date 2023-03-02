import { Platform, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppleLogo from '../assets/apple.svg';
import GoogleLogo from '../assets/google.svg';
import FacebookLogo from '../assets/facebook.svg';

import Logo from '../assets/logo.svg';
import { InputButton } from '../components/InputButton';
import { StandardButton } from '../components/StandartButton';

const { height: screenHeight } = Dimensions.get('window');

export function SignIn() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 w-screen bg-gray-100">
      <View className="items-center py-3">
        <View className={screenHeight >= 700 ? 'mt-20 w-80' : 'mt-4 w-80'}>
          <View className="items-center">
            {screenHeight >= 700 && <Logo className="items-center" />}
          </View>
          <Text className="font-bold text-2xl mt-3">
            Lavamos suas roupas com carinho e tecnologia!
          </Text>
        </View>
        <View>
          <InputButton placeholder="E-mail" name="mail" keyboardType="email-address" />
          <InputButton placeholder="Senha" name="lock" secureTextEntry={true} />
        </View>
      </View>
      <View className="items-center">
        <View className="w-80 items-end">
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigate('forgotpassword')}>
            <Text className="text-blue-600">Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-2">
        <StandardButton title="Entrar" onPress={() => navigate('selectlocation')} />
      </View>

      {Platform.OS === 'ios' && (
        <View>
          <StandardButton title="Continuar com Apple" backgroundColor="bg-black" icon={AppleLogo} />
        </View>
      )}

      <View>
        <StandardButton
          title="Continuar com Google"
          backgroundColor="bg-white"
          textColor="text-black"
          borderColor="border-2"
          icon={GoogleLogo}
        />
        <StandardButton
          title="Continuar com Facebook"
          className="bg-blue-600"
          icon={FacebookLogo}
        />
      </View>

      <View className="items-center justify-center mt-4">
        <TouchableOpacity onPress={() => navigate('signup')}>
          <Text className="text-blue-600 text-base">Não tem uma conta? Cadastre-se!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
