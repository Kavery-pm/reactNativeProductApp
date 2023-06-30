import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './src/constants/colors'
import ProductListScreen from './src/screens/ProductListScreen';
export default function App() {
  return (
    <LinearGradient
    colors={[Colors.primary700, Colors.accent500]}
    style={styles.rootScreen}
  >
  <ProductListScreen/>
    </LinearGradient>
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
