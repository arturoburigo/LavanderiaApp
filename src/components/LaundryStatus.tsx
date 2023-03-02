import { View, Text } from 'react-native';
import LaundryIcon from '../assets/laundryIcon.svg';

interface Props {
  title: string;
  backgroundColor?: string;
  timeremaining?: string;
}

export function LaundryStatus({ title, backgroundColor = 'bg-blue-500', timeremaining }: Props) {
  return (
    <View
      className={` ${backgroundColor}  rounded-2xl py-5 border-2 w-56 items-center justify-center flex-row mr-4`}
    >
      <View className="px-3 items-center justify-center">
        <Text className="text-white font-bold text-lg mb-3">{title}</Text>
        <LaundryIcon />
      </View>
      <View className="w-32 py-1 items-center">
        <Text className="text-white font-semibold text-base items-center justify-center">
          Tempo restante
        </Text>
        <Text className="text-white font-semibold text-base mt-3">{timeremaining}</Text>
      </View>
    </View>
  );
}
