import { View, Text, Pressable } from 'react-native';

interface IProps {
    title: string,
    action: () => void;
}

export function Button({ title, action }: IProps) {
 return (
   <View className='w-72 flex items-center justify-center py-4 rounded-full mb-20 shadow-slate-800' style={{ backgroundColor: "#612FCC" }}>
    <Pressable onPress={action}>
        <Text className='text-2xl text-white'>{title}</Text>
    </Pressable>
   </View>
  );
}