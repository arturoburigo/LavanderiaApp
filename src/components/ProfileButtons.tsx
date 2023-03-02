import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Props extends TouchableOpacityProps {
  name: any;
  title: String;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  iconColor?: string;
}

export function ProfileButtons({
  name,
  title,
  textColor = 'text-white',
  backgroundColor = 'bg-blue-600',
  iconColor = 'white',
  borderColor = '',
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      {...rest}
      className={`flex-row mt-4 ${backgroundColor} ${borderColor} items-center rounded-md`}
    >
      <View className="px-6">
        <Feather name={name} color={`${iconColor}`} size={23} />
      </View>
      <View className="px-3 py-3.5 w-64">
        <Text className={`font-bold text-lg ${textColor}`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
