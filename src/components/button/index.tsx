import { View, Text, Pressable } from 'react-native';

interface IProps {
    title: string,
    action: () => void;
}

export function Button({ title, action }: IProps) {
 return (
   <View className='w-fit flex items-center justify-center px-10 py-5 rounded-full bg-blue-600'>
    <Pressable onPress={action}>
        <Text className='text-2xl text-white'>{title}</Text>
    </Pressable>
   </View>
  );
}