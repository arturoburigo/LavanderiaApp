import { View, Text } from 'react-native';
import LaundryIcon from '../assets/laundryIcon.svg';

interface Props {
  title: string;
  backgroundColor?: string;
}

export function CardsComponent({ title, backgroundColor = 'bg-blue-500' }: Props) {
  return (
    <View className={` ${backgroundColor} items-center rounded-2xl mr-4 py-5 border-2 w-24`}>
      <Text className="text-white font-bold text-lg mb-3">{title}</Text>
      <LaundryIcon />
    </View>
  );
}
