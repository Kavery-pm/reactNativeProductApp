import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './src/constants/colors'
import ProductListScreen from './src/screens/ProductListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <Stack.Navigator>
    <LinearGradient
    colors={[Colors.primary700, Colors.accent500]}
    style={styles.rootScreen}
  >
    <Stack.Screen name="Products" component={ProductListScreen} />
    </LinearGradient>
  </Stack.Navigator>
 
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
