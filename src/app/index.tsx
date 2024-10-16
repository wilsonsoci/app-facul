import { View, Text } from 'react-native';
import { Button } from '../components/button';
import { router } from 'expo-router';

export default function Index() {
 return (
   <View className='w-full h-full flex items-center justify-between py-52 bg-slate-400'>
    <Text className='text-3xl text-black'>TELA INICIAL</Text>
    <Button 
      title='LOGIN' 
      action={() => router.navigate("./tabs/auth/login")}
    />
   </View>
  );
}