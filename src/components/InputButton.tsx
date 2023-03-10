import { View, TextInput, TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Props extends TextInputProps {
  name: any;
}

export function InputButton({ name, ...rest }: Props) {
  return (
    <View className="flex flex-row mt-4 items-center rounded-md border-2 w-80 border-blue-600 focus:border-2 focus:border-blue-600">
      <View className="ml-3">
        <Feather name={name} color="gray" size={23} />
      </View>
      <TextInput {...rest} className="px-3 py-3.5 w-64" />
    </View>
  );
}
