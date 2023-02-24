import { Text, View, TouchableOpacity } from 'react-native';
import LaundryIcon from '../assets/laundryIcon.svg';

interface Props {
  adress: string;
  distance: number;
  hours: string;
}

export function InputSelectLocation({ adress, distance, hours }: Props) {
  return (
    <View className="items-center mt-3 w-full">
      <TouchableOpacity
        activeOpacity={0.7}
        className={`w-80 bg-white justify-center border-blue-600 border-2 py-3.5 rounded-md`}
      >
        <View className="flex items-center flex-row px-2">
          <LaundryIcon />
          <View className="ml-3 justify-center">
            <Text className={`font-bold text-base }`}>{`${adress} - ${distance}km`}</Text>
            <Text>{`${hours}hrs`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
