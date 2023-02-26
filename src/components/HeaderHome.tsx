import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Props {
  name: string;
  location: string;
}

export function HeaderHome({ name, location }: Props) {
  return (
    <View className="h-28 bg-blue-600 justify-end">
      <View className="flex-row justify-between items-center px-4 py-2">
        <Text className="text-white text-2xl font-bold ">{`Olá, ${name}!`}</Text>
        <View className="flex-row items-center justify-center px-2">
          <Feather name="map-pin" size={24} color="white" />
          <Text className="ml-2 text-white font-bold text-base">{`${location}`}</Text>
        </View>
      </View>
    </View>
  );
}
