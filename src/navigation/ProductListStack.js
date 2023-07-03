import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from '../screens/ProductListScreen';
const Stack = createNativeStackNavigator();
const ProductListStack = ()=>{
    return (
    <Stack.Navigator>
     
      <Stack.Screen name="Products" component={ProductListScreen} />
   
     
    </Stack.Navigator>)
}
export default ProductListStack;