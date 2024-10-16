import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function InputEmail() {
 return (
    <View className='w-96 flex-row rounded-full h-14 items-center gap-4 px-4 mb-10' style={{ backgroundColor: "#1B1732" }}>
        <Feather name='mail' size={24} color={"#7E7A93"}/>

        <TextInput
            className='text-neutral-300'
            placeholder="Insira seu e-mail"
            placeholderTextColor={"#7E7A93"}
            keyboardType="email-address"
            autoCapitalize="none"
        />
   </View>
  );
}

export function InputPassword() {
    return (
       <View className='w-96 flex-row rounded-full h-14 items-center gap-4 px-4 mb-10' style={{ backgroundColor: "#1B1732" }}>
           <Feather name='lock' size={24} color={"#7E7A93"}/>
   
           <TextInput
               className='text-neutral-300'
               placeholder="Insira sua senha"
               placeholderTextColor={"#7E7A93"}
               secureTextEntry
           />
      </View>
     );
   }