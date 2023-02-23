import { Text, View, TouchableOpacity } from 'react-native'


interface Props{
    title: string,
    backgroundColor?: string,
    textColor?: string,
    borderColor?: string,
    onPress?: () => void
}

export function StandardButton({ title, backgroundColor = 'bg-blue-600', textColor = 'text-white', borderColor = '', onPress }: Props) {
    return (
        <View className='justify-center items-center mt-3 w-full'>
            <TouchableOpacity activeOpacity={0.7} className={`w-80 ${backgroundColor} py-3.5 rounded-lg items-center ${borderColor}`} onPress={onPress}>
                <Text className={`font-bold text-base ${textColor}`}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
