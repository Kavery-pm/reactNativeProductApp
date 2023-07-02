import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './src/constants/colors'
import ProductListScreen from './src/screens/ProductListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
     <NavigationContainer >
    
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:'yellow'},
      contentStyle:{backgroundColor:'pink'}
     }}>
   
    <Stack.Screen name="Products" component={ProductListScreen} />
    <Stack.Screen name="detail" component={ProductDetailScreen} />
   
  </Stack.Navigator>
  
  </NavigationContainer>
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    textAlign:'center',

  },
  rootScreen: {
    flex: 1,
  
  },
});
