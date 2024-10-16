import { View, Text, Image } from 'react-native';
import { Button } from '../components/button';
import { router } from 'expo-router';

import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
 return (
   <View className='w-full' style={{ backgroundColor: "#3E2D3F", flex: 1 }}>
    <View className='w-full flex flex-col items-center justify-center' style={{ marginTop: statusBarHeight + 8 }}>
      <Text className='text-4xl text-white bold-text mt-40'>APP-FACUL</Text>

      <Text 
        className='text-xl text-neutral-300 bold-text mt-4'>Bem-vindo ao app!</Text>
    </View>

    <View className='w-full mt-32 flex flex-col items-center justify-center'>
      <Button 
        title='Criar conta' 
        action={() => router.navigate("./tabs/auth/register")}
      />
      <Button 
        title='Entrar' 
        action={() => router.navigate("./tabs/auth/login")}
      />
    </View>

    <View className='w-full items-center justify-center mt-20'>
      <Text className='text-neutral-600'>APP-FACUL™ 2024 </Text>
    </View>
   </View>
  );
}