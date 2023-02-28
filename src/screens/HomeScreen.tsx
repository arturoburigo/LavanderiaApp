import { View, Text, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HeaderHome } from '../components/HeaderHome';
import { CardsComponent } from '../components/CardsComponent';
import { InUse } from '../components/InUse';
import { useNavigation } from '@react-navigation/native';

export function HomeScreen() {
  const { navigate } = useNavigation();

  return (
    <View className="h-screen w-full">
      <StatusBar style="light" />
      <HeaderHome location="Lauro Muller, 240" name="Arturo" />
      <View className="w-7/12 mt-4 px-3">
        <View className="bg-blue-600 px-3 py-5 rounded-lg">
          <Text className="text-white text-3xl font-bold">Saldo Atual</Text>
          <Text className="text-white mt-2 text-2xl font-bold">R$ 52,00</Text>
        </View>
      </View>
      <View className="w-7/12 px-3 mt-7 ">
        <Text className="text-base font-semibold"> Todas as Lavadoras</Text>
      </View>
      <View className="px-3 mt-3">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row ">
            <CardsComponent title="L1" />
            <CardsComponent title="L2" />
            <CardsComponent backgroundColor="bg-gray-500" title="L3" />
            <CardsComponent title="L4" />
            <CardsComponent backgroundColor="bg-gray-500" title="L5" />
          </View>
        </ScrollView>
      </View>
      <View className="w-7/12 px-3 mt-7 ">
        <Text className="text-base font-semibold"> Todas as Secadoras</Text>
      </View>
      <View className="px-3 mt-3">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row ">
            <CardsComponent backgroundColor="bg-gray-500" title="S1" />
            <CardsComponent title="S2" />
            <CardsComponent title="S3" />
            <CardsComponent backgroundColor="bg-gray-500" title="S4" />
            <CardsComponent title="S5" />
          </View>
        </ScrollView>
      </View>
      <View className="w-7/12 px-3 mt-7 ">
        <Text className="text-base font-semibold"> Meus dispositivos</Text>
      </View>
      <View className="px-3 mt-3 ">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <InUse title="S2" backgroundColor="bg-orange-600" timeremaining="32 Min" />
          <InUse title="S2" backgroundColor="bg-green-600" timeremaining="Pronto" />
        </ScrollView>
      </View>
      <View className="items-center mt-20">
        <TouchableOpacity onPress={() => navigate('profile')}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
