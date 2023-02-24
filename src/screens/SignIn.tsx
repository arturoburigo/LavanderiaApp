import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/logo.svg';
import { InputButton } from '../components/InputButton';
import { StandardButton } from '../components/StandartButton';

export function SignIn() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 w-screen bg-white">
      <View className="items-center">
        <View className="mt-12 w-80">
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
        <TouchableOpacity activeOpacity={0.7} className="w-80 items-end">
          <View className="w-4/5 items-end">
            <View className="mt-4">
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigate('forgotpassword')}>
                <Text className="text-blue-600">Esqueceu a senha?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View className="mt-3">
        <StandardButton title="Entrar" onPress={() => navigate('selectlocation')} />
      </View>

      {/*
               >
                    <StandardButton title="Entrar com Apple" backgroundColor="bg-black"/>
                    <StandardButton title="Entrar com Google" textColor="text-indigo-900" backgroundColor="bg-gray-100"/>
                </View>
                */}

      <View className="items-center justify-center mt-8">
        <TouchableOpacity onPress={() => navigate('signup')}>
          <Text className="text-blue-600">Não tem uma conta? Cadastre-se!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
