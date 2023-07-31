/* import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Anton': require('./src/assets/fonts/Anton-Regular.ttf')
  })
  if (!fontsLoaded) return null
  return (
    <View className='flex items-center justify-center bg-zinc-900 w-full h-full relative'>
      <View className='w-[2px] h-full bg-[#00ff0d] z-50 absolute left-40'></View>
      <Text className='text-[#ff2222] text-[25px] text-center font-["Anton"]'>Seja bem-vinde à nossa {`\n`} lista de compras compartilhada</Text>
      <StatusBar style="auto" />
    </View>
  );
} */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import Routes from "./src";

AppRegistry.registerComponent(appName, () => Routes);