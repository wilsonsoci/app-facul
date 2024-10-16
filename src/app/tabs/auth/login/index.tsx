import { InputEmail, InputPassword } from '@/src/components/input';
import { Button } from '@/src/components/button';
import { View, Text, Pressable } from 'react-native';

import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight

export default function Login() {
 return (
   <View className='w-full' style={{ backgroundColor: "#3E2D3F", flex: 1 }}>
    <View className='w-full flex flex-col items-center justify-center' style={{ marginTop: statusBarHeight + 8 }}>
      <Text className='text-4xl text-white bold-text mt-40'>LOGIN</Text>
    </View>

    <View className='w-full mt-32 flex flex-col items-center justify-center'>
      <InputEmail/>
      <InputPassword/>

      <Button 
        title='Entrar' 
        action={() => console.log("Login concluído!")}
      />
    </View>

    <View className='w-full items-center justify-center mt-20'>
      <Pressable onPress={() => console.log("Esqueci minha senha!")}>
        <Text className='underline' style={{ color: "#8460B8" }}>Esqueceu sua senha?</Text>
      </Pressable>
    </View>
   </View>
  );
}