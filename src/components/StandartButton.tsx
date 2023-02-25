import { Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  icon?: React.FC<{ width: number; height: number; color: string }>;
  onPress?: () => void;
}

export function StandardButton({
  title,
  backgroundColor = 'bg-blue-600',
  textColor = 'text-white',
  borderColor = '',
  icon: Icon,
  onPress
}: Props) {
  return (
    <View className="justify-center items-center mt-3 w-full">
      <TouchableOpacity
        activeOpacity={0.7}
        className={`w-80 ${backgroundColor} py-3.5 rounded-lg justify-center flex-row ${borderColor}`}
        onPress={onPress}
      >
        {Icon && (
          <View className="px-2">
            <Icon width={24} height={24} color={textColor} />
          </View>
        )}
        <Text className={`font-bold text-base ${textColor}`}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
