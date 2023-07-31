
import React from 'react';
import { View, Button, Text } from 'react-native';

let [fontsLoaded] = useFonts({
    'Anton': require('./src/assets/fonts/Anton-Regular.ttf')
})
if (!fontsLoaded) return null

const InitialPage = ({ navigation }) => (

    <View className='flex items-center justify-center bg-zinc-900 w-full h-full relative'>
        <View className='w-[2px] h-full bg-[#00ff0d] z-50 absolute left-40'></View>
        <Text className='text-[#ff2222] text-[25px] text-center font-["Anton"]'>Seja bem-vinde à nossa {`\n`} lista de compras compartilhada</Text>
        <StatusBar style="auto" />

        <Button
            title="Começar"
            onPress={() => navigation.navigate('Home')}
        />
    </View >
);

InitialPage.navigationOptions = {
    title: 'InitialPage',
}


export default InitialPage;