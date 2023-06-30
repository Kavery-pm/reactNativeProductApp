import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../src/constants/colors'
const ProductDetailScreen = ({route})=>{
    const { product } = route.params;
    return (
        <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <View>
            <Text>{product.title}</Text>
        </View>
        </LinearGradient>
    )

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
export default ProductDetailScreen